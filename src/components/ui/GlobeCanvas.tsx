"use client";

// Glowing point-cloud globe in raw three.js. Client-only: loaded lazily by ./Globe.tsx.
//
// Layers, back to front:
//   body   – opaque dark sphere with a fresnel rim (hides the far side + stars behind it)
//   halo   – additive back-face shell that glows outward from the silhouette
//   dots   – fibonacci-sampled points: dense + bright on land, sparse on ocean, brighter at the rim
//   arcs   – amber tubes Kochi → client countries, with a travelling pulse
//   pins   – amber marker dots + expanding rings
import { useEffect, useRef, type RefObject } from "react";
import {
  AdditiveBlending,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  CatmullRomCurve3,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  Quaternion,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { FeatureCollection, Position } from "geojson";
import landTopo from "world-atlas/land-110m.json";
import { ACCENT_HEX, KOCHI } from "@/lib/globe-utils";
import type { GlobeFocus, GlobeMarker } from "./Globe";

interface GlobeCanvasProps {
  markers: GlobeMarker[];
  focus?: GlobeFocus | null;
  /** Element that receives drag gestures (the visible globe square, not the oversized canvas). */
  dragTargetRef: RefObject<HTMLElement | null>;
  onReady: () => void;
}

// ---------------------------------------------------------------- palette (sRGB, fed raw to shaders)

const hex = (h: string) => {
  const n = parseInt(h.slice(1), 16);
  return new Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

const COLORS = {
  land: hex("#67e8f9"), // cyan-300
  ocean: hex("#3b82f6"), // blue-500
  rim: hex("#cffafe"), // cyan-100
  halo: hex("#38bdf8"), // sky-400
  bodyDeep: hex("#03112b"),
  bodyRim: hex("#22d3ee"),
  accent: hex(ACCENT_HEX),
};

// ---------------------------------------------------------------- geometry helpers

const CAMERA_DISTANCE = 4.6;
const DEFAULT_TILT = 0.32;
const INITIAL_LON = 60;
const DEG = Math.PI / 180;

/** lon 0 faces +z (the camera); rotating the globe by -lon brings that meridian to the front. */
function latLonToVec(lat: number, lon: number, r = 1) {
  const la = lat * DEG;
  const lo = lon * DEG;
  return new Vector3(r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo));
}

/** Rasterise world land polygons into an equirectangular mask for fast point-in-land tests. */
function buildLandMask(w = 1024, h = 512) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return () => false;

  const topo = landTopo as unknown as Topology<{ land: GeometryCollection }>;
  const land = feature(topo, topo.objects.land) as FeatureCollection;
  const x = (lon: number) => ((lon + 180) / 360) * w;
  const y = (lat: number) => ((90 - lat) / 180) * h;

  ctx.fillStyle = "#fff";
  for (const f of land.features) {
    const g = f.geometry;
    const polygons: Position[][][] =
      g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    for (const poly of polygons) {
      // Skip Antarctica (also avoids its pole-wrapping ring).
      if (poly[0]?.some((p) => (p[1] ?? 0) < -60)) continue;
      const path = new Path2D();
      for (const ring of poly) {
        // Unwrap longitudes so rings that cross the antimeridian stay continuous.
        let prev = ring[0]?.[0] ?? 0;
        let offset = 0;
        ring.forEach(([lon = 0, lat = 0], i) => {
          if (i > 0) {
            const d = lon - prev;
            if (d > 180) offset -= 360;
            else if (d < -180) offset += 360;
          }
          prev = lon;
          if (i === 0) path.moveTo(x(lon + offset), y(lat));
          else path.lineTo(x(lon + offset), y(lat));
        });
        path.closePath();
      }
      // Draw wrapped copies so anything pushed past ±180° lands on the other edge.
      for (const dx of [-w, 0, w]) {
        ctx.setTransform(1, 0, 0, 1, dx, 0);
        ctx.fill(path, "evenodd");
      }
    }
  }

  const data = ctx.getImageData(0, 0, w, h).data;
  return (lat: number, lon: number) => {
    const px = Math.min(w - 1, Math.max(0, Math.floor(x(lon))));
    const py = Math.min(h - 1, Math.max(0, Math.floor(y(lat))));
    return (data[(py * w + px) * 4] ?? 0) > 127;
  };
}

/** Evenly spread points on a sphere, yielded as lat/lon in degrees. */
function* fibonacciSphere(n: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const yy = 1 - ((i + 0.5) / n) * 2;
    const r = Math.sqrt(1 - yy * yy);
    const th = golden * i;
    yield { lat: Math.asin(yy) / DEG, lon: Math.atan2(Math.cos(th) * r, Math.sin(th) * r) / DEG };
  }
}

function buildDots() {
  const isLand = buildLandMask();
  const pos: number[] = [];
  const landAttr: number[] = [];
  const rand: number[] = [];
  const push = (lat: number, lon: number, land: number) => {
    const v = latLonToVec(lat, lon);
    pos.push(v.x, v.y, v.z);
    landAttr.push(land);
    rand.push(Math.random());
  };
  for (const { lat, lon } of fibonacciSphere(72000)) if (lat > -60 && isLand(lat, lon)) push(lat, lon, 1);
  for (const { lat, lon } of fibonacciSphere(9000)) if (!isLand(lat, lon)) push(lat, lon, 0);

  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(pos), 3));
  geo.setAttribute("aLand", new BufferAttribute(new Float32Array(landAttr), 1));
  geo.setAttribute("aRand", new BufferAttribute(new Float32Array(rand), 1));
  return geo;
}

function arcCurve(a: Vector3, b: Vector3, segments = 64) {
  const theta = a.angleTo(b);
  const lift = Math.min(0.26, 0.05 + theta * 0.14);
  const sin = Math.sin(theta) || 1;
  const pts: Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = a
      .clone()
      .multiplyScalar(Math.sin((1 - t) * theta) / sin)
      .add(b.clone().multiplyScalar(Math.sin(t * theta) / sin))
      .normalize()
      .multiplyScalar(1.005 + lift * Math.sin(Math.PI * t));
    pts.push(p);
  }
  return new CatmullRomCurve3(pts);
}

const lerpAngle = (from: number, to: number, t: number) => {
  let d = to - from;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return from + d * t;
};

// ---------------------------------------------------------------- shaders

const dotsVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  uniform float uIntro;
  attribute float aLand;
  attribute float aRand;
  varying float vAlpha;
  varying float vLand;
  varying float vRim;
  void main() {
    // Intro: each dot falls in from outside the sphere, staggered by aRand.
    float intro = clamp((uIntro - aRand * 0.5) / 0.5, 0.0, 1.0);
    intro = 1.0 - pow(1.0 - intro, 3.0);
    vec3 p = position * (1.0 + (1.0 - intro) * (0.5 + aRand * 1.2));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vec3 n = normalize(normalMatrix * position);
    float facing = dot(n, normalize(-mv.xyz));
    float rim = pow(1.0 - clamp(facing, 0.0, 1.0), 4.0);
    float twinkle = 0.72 + 0.28 * sin(uTime * (0.8 + aRand * 2.2) + aRand * 40.0);

    float oceanA = 0.07 + rim * 0.6;
    float landA = (0.3 + 0.7 * facing) * twinkle + rim * 0.9;
    vAlpha = mix(oceanA, landA, aLand) * intro * smoothstep(-0.05, 0.1, facing);
    vLand = aLand;
    vRim = rim;

    gl_Position = projectionMatrix * mv;
    float size = mix(0.6, 1.0, aLand) * (1.0 + rim * 0.6);
    gl_PointSize = uScale * 0.0042 * size * (${CAMERA_DISTANCE.toFixed(1)} / -mv.z);
  }
`;

const dotsFragment = /* glsl */ `
  uniform vec3 uLand;
  uniform vec3 uOcean;
  uniform vec3 uRim;
  varying float vAlpha;
  varying float vLand;
  varying float vRim;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float disc = smoothstep(0.5, 0.12, d);
    float core = smoothstep(0.22, 0.0, d);
    vec3 col = mix(uOcean, uLand, vLand);
    col = mix(col, uRim, vRim * 0.7) + core * 0.3;
    gl_FragColor = vec4(col, disc * vAlpha);
  }
`;

const fresnelVertex = /* glsl */ `
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const bodyFragment = /* glsl */ `
  uniform vec3 uDeep;
  uniform vec3 uRim;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    float f = 1.0 - max(dot(vN, vView), 0.0);
    float light = max(dot(vN, normalize(vec3(-0.5, 0.6, 0.7))), 0.0);
    vec3 col = uDeep + uDeep * light * 0.8 + uRim * pow(f, 3.0) * 0.5;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const haloFragment = /* glsl */ `
  uniform vec3 uColor;
  varying vec3 vN;
  void main() {
    float i = pow(clamp(-vN.z, 0.0, 1.0), 2.2) * 1.3;
    gl_FragColor = vec4(uColor, i);
  }
`;

const arcVertex = /* glsl */ `
  varying float vT;
  void main() {
    vT = uv.x;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const arcFragment = /* glsl */ `
  uniform float uTime;
  uniform float uOffset;
  uniform float uIntro;
  uniform vec3 uColor;
  varying float vT;
  void main() {
    float head = fract(uTime * 0.22 + uOffset) * 1.5 - 0.25;
    float trail = smoothstep(head - 0.28, head, vT) * (1.0 - smoothstep(head, head + 0.01, vT));
    float ends = smoothstep(0.0, 0.04, vT) * smoothstep(1.0, 0.96, vT);
    float drawn = step(vT, uIntro * 1.6 - 0.6); // arcs draw out after the dots land
    float a = (0.2 + trail * 1.8) * ends * drawn;
    gl_FragColor = vec4(uColor * (1.0 + trail * 0.8), a);
  }
`;

const pinVertex = /* glsl */ `
  uniform float uScale;
  uniform float uTime;
  uniform float uIntro;
  attribute float aSize;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float pulse = 1.0 + 0.15 * sin(uTime * 3.0 + position.x * 10.0);
    gl_PointSize = uScale * aSize * pulse * smoothstep(0.6, 1.0, uIntro) * (${CAMERA_DISTANCE.toFixed(1)} / -mv.z);
  }
`;

const pinFragment = /* glsl */ `
  uniform vec3 uColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.08, d);
    gl_FragColor = vec4(mix(uColor, vec3(1.0, 0.96, 0.88), core), glow * glow + core);
  }
`;

// ---------------------------------------------------------------- component

export default function GlobeCanvas({ markers, focus, dragTargetRef, onReady }: GlobeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef(focus);
  const focusChangedAtRef = useRef(0);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    focusRef.current = focus;
    focusChangedAtRef.current = performance.now();
  }, [focus?.lat, focus?.lon, focus]);

  const markerKey = markers.map((m) => `${m.lat},${m.lon}`).join("|");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // No WebGL: leave the space empty.
    }
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, CAMERA_DISTANCE);

    const globe = new Group();
    scene.add(globe);

    const disposables: { dispose: () => void }[] = [];
    const track = <T extends { dispose: () => void }>(o: T) => {
      disposables.push(o);
      return o;
    };

    const shared = {
      uTime: { value: 0 },
      uScale: { value: 600 * dpr },
      uIntro: { value: reducedMotion ? 1 : 0 },
    };

    // Body
    const body = new Mesh(
      track(new SphereGeometry(0.99, 96, 96)),
      track(
        new ShaderMaterial({
          vertexShader: fresnelVertex,
          fragmentShader: bodyFragment,
          uniforms: { uDeep: { value: COLORS.bodyDeep }, uRim: { value: COLORS.bodyRim } },
        })
      )
    );
    body.renderOrder = 0;
    globe.add(body);

    // Halo (not rotated with the globe; it is symmetric anyway)
    const halo = new Mesh(
      track(new SphereGeometry(1, 64, 64)),
      track(
        new ShaderMaterial({
          vertexShader: fresnelVertex,
          fragmentShader: haloFragment,
          uniforms: { uColor: { value: COLORS.halo } },
          side: BackSide,
          blending: AdditiveBlending,
          transparent: true,
          depthWrite: false,
        })
      )
    );
    halo.scale.setScalar(1.28);
    halo.renderOrder = 1;
    scene.add(halo);

    // Dots
    const dots = new Points(
      track(buildDots()),
      track(
        new ShaderMaterial({
          vertexShader: dotsVertex,
          fragmentShader: dotsFragment,
          uniforms: {
            ...shared,
            uLand: { value: COLORS.land },
            uOcean: { value: COLORS.ocean },
            uRim: { value: COLORS.rim },
          },
          blending: AdditiveBlending,
          transparent: true,
          depthWrite: false,
        })
      )
    );
    dots.renderOrder = 2;
    globe.add(dots);

    // Arcs
    const hub = latLonToVec(KOCHI[0], KOCHI[1]);
    markers.forEach((m, i) => {
      const curve = arcCurve(hub, latLonToVec(m.lat, m.lon));
      const arc = new Mesh(
        track(new TubeGeometry(curve, 96, 0.0042, 6, false)),
        track(
          new ShaderMaterial({
            vertexShader: arcVertex,
            fragmentShader: arcFragment,
            uniforms: {
              uTime: shared.uTime,
              uIntro: shared.uIntro,
              uOffset: { value: (i * 0.37) % 1 },
              uColor: { value: COLORS.accent },
            },
            blending: AdditiveBlending,
            transparent: true,
            depthWrite: false,
          })
        )
      );
      arc.renderOrder = 3;
      globe.add(arc);
    });

    // Pins
    const pinPositions = [hub, ...markers.map((m) => latLonToVec(m.lat, m.lon))];
    const pinGeo = track(new BufferGeometry());
    pinGeo.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(pinPositions.flatMap((p) => p.clone().multiplyScalar(1.01).toArray())), 3)
    );
    pinGeo.setAttribute(
      "aSize",
      new BufferAttribute(new Float32Array(pinPositions.map((_, i) => (i === 0 ? 0.034 : 0.024))), 1)
    );
    const pins = new Points(
      pinGeo,
      track(
        new ShaderMaterial({
          vertexShader: pinVertex,
          fragmentShader: pinFragment,
          uniforms: { ...shared, uColor: { value: COLORS.accent } },
          blending: AdditiveBlending,
          transparent: true,
          depthWrite: false,
        })
      )
    );
    pins.renderOrder = 4;
    globe.add(pins);

    // Pulse rings
    const ringGeo = track(new RingGeometry(0.82, 1, 48));
    const zAxis = new Vector3(0, 0, 1);
    const rings = pinPositions.map((p, i) => {
      const mat = track(
        new MeshBasicMaterial({
          color: ACCENT_HEX,
          transparent: true,
          blending: AdditiveBlending,
          depthWrite: false,
          side: DoubleSide,
        })
      );
      const ring = new Mesh(ringGeo, mat);
      ring.position.copy(p.clone().multiplyScalar(1.006));
      ring.quaternion.copy(new Quaternion().setFromUnitVectors(zAxis, p.clone().normalize()));
      ring.renderOrder = 4;
      ring.userData.phase = i === 0 ? 0 : (i * 0.23) % 1;
      ring.userData.max = i === 0 ? 0.11 : 0.075;
      globe.add(ring);
      return ring;
    });

    // ------------------------------------------------------------ sizing

    const resize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      shared.uScale.value = h * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // ------------------------------------------------------------ interaction

    let rotY = -INITIAL_LON * DEG;
    let rotX = DEFAULT_TILT;
    let velocity = 0;
    let pauseUntil = 0;
    let drag: { x: number; y: number; id: number } | null = null;

    const dragTarget = dragTargetRef.current;
    const onDown = (e: PointerEvent) => {
      drag = { x: e.clientX, y: e.clientY, id: e.pointerId };
      velocity = 0;
      dragTarget?.setPointerCapture(e.pointerId);
      if (dragTarget) dragTarget.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      drag.x = e.clientX;
      drag.y = e.clientY;
      rotY += dx * 0.005;
      rotX = Math.max(-0.9, Math.min(0.9, rotX + dy * 0.003));
      velocity = dx * 0.005;
      pauseUntil = performance.now() + 2500;
    };
    const onUp = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag = null;
      if (dragTarget) dragTarget.style.cursor = "grab";
      try {
        dragTarget?.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };
    if (dragTarget) {
      dragTarget.style.cursor = "grab";
      dragTarget.style.touchAction = "pan-y"; // vertical swipes still scroll the page
      dragTarget.addEventListener("pointerdown", onDown);
      dragTarget.addEventListener("pointermove", onMove);
      dragTarget.addEventListener("pointerup", onUp);
      dragTarget.addEventListener("pointercancel", onUp);
    }

    // ------------------------------------------------------------ loop

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry?.isIntersecting ?? true), {
      rootMargin: "100px",
    });
    io.observe(container);

    let frame = 0;
    let last = performance.now();
    const start = last;
    let readyFired = false;
    const INTRO_MS = 2400;

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden) {
        last = performance.now();
        return;
      }
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (!reducedMotion) {
        shared.uTime.value = (now - start) / 1000;
        shared.uIntro.value = Math.min(1, (now - start) / INTRO_MS);
      }

      const f = focusRef.current;
      const focusing = f && now - focusChangedAtRef.current < 8000;
      if (drag) {
        // rotation driven by pointer
      } else if (focusing && f) {
        const k = reducedMotion ? 1 : 1 - Math.pow(0.002, dt);
        rotY = lerpAngle(rotY, -f.lon * DEG, k);
        rotX += (Math.max(-0.9, Math.min(0.9, f.lat * DEG)) - rotX) * k;
      } else {
        if (!reducedMotion && now > pauseUntil) rotY += dt * 0.12;
        rotY += velocity;
        velocity *= Math.pow(0.04, dt);
        if (now > pauseUntil) rotX += (DEFAULT_TILT - rotX) * (1 - Math.pow(0.3, dt));
      }
      globe.rotation.set(rotX, rotY, 0);

      const t = shared.uTime.value;
      for (const ring of rings) {
        const p = reducedMotion ? 0.5 : (t * 0.55 + ring.userData.phase) % 1;
        ring.scale.setScalar(0.01 + (ring.userData.max as number) * p);
        (ring.material as MeshBasicMaterial).opacity = (1 - p) * 0.9 * shared.uIntro.value;
      }

      renderer.render(scene, camera);
      if (!readyFired) {
        readyFired = true;
        onReadyRef.current();
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      if (dragTarget) {
        dragTarget.removeEventListener("pointerdown", onDown);
        dragTarget.removeEventListener("pointermove", onMove);
        dragTarget.removeEventListener("pointerup", onUp);
        dragTarget.removeEventListener("pointercancel", onUp);
      }
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerKey]);

  return <div ref={containerRef} className="h-full w-full" />;
}

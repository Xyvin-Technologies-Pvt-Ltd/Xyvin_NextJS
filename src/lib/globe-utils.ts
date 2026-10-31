/** Kochi office — arc origin for client-country connections. */
export const KOCHI: [number, number] = [9.93, 76.27];

export const ACCENT_RGB: [number, number, number] = [0.949, 0.663, 0.231];

export function locationToAngles(lat: number, lon: number) {
  return {
    phi: Math.PI + (lon * Math.PI) / 180,
    theta: (lat * Math.PI) / 180,
  };
}

/** Approximate longitude at the globe centre for a given phi rotation. */
export function phiToLon(phi: number) {
  let lon = ((phi - Math.PI) * 180) / Math.PI;
  while (lon > 180) lon -= 360;
  while (lon < -180) lon += 360;
  return lon;
}

function lonDelta(a: number, b: number) {
  let d = a - b;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return Math.abs(d);
}

export function nearestCountryIndex(phi: number, countries: { lon: number }[]) {
  const centerLon = phiToLon(phi);
  let best = 0;
  let bestDist = Infinity;
  countries.forEach((c, i) => {
    const d = lonDelta(centerLon, c.lon);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });
  return best;
}

/** Shortest-path interpolation between two phi values (radians). */
export function lerpPhi(from: number, to: number, t: number) {
  let delta = to - from;
  while (delta > Math.PI) delta -= 2 * Math.PI;
  while (delta < -Math.PI) delta += 2 * Math.PI;
  return from + delta * t;
}

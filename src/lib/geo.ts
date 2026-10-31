import { PROJECTION } from "@/data/world_map";

// Equal Earth projection, matching the parameters used to generate src/data/world_map.ts.
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;

export function project(lon: number, lat: number) {
  const lambda = (lon * Math.PI) / 180;
  const l = Math.asin(M * Math.sin((lat * Math.PI) / 180));
  const l2 = l * l, l6 = l2 * l2 * l2;
  const x = (lambda * Math.cos(l)) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)));
  const y = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2));
  return { x: PROJECTION.translateX + PROJECTION.scale * x, y: PROJECTION.translateY - PROJECTION.scale * y };
}

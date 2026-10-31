/** Kochi office — arc origin for client-country connections. */
export const KOCHI: [number, number] = [9.93, 76.27];

export const ACCENT_RGB: [number, number, number] = [0.949, 0.663, 0.231];

export function locationToAngles(lat: number, lon: number) {
  return {
    phi: Math.PI + (lon * Math.PI) / 180,
    theta: (lat * Math.PI) / 180,
  };
}

/** Shortest-path interpolation between two phi values (radians). */
export function lerpPhi(from: number, to: number, t: number) {
  let delta = to - from;
  while (delta > Math.PI) delta -= 2 * Math.PI;
  while (delta < -Math.PI) delta += 2 * Math.PI;
  return from + delta * t;
}

/** Encode an address for <ProtectedEmail>: reversed + base64, so it never appears in page HTML. */
export function encodeEmail(email: string) {
  const reversed = email.split("").reverse().join("");
  return typeof window === "undefined" ? Buffer.from(reversed).toString("base64") : btoa(reversed);
}

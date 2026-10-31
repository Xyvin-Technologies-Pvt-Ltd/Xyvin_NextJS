/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

// Old URLs (with the /Xyvin prefix) permanently redirect to the new ones.
const legacyRedirects = ["Xyvin", "xyvin"].flatMap((prefix) => [
  { source: `/${prefix}/service`, destination: "/services", permanent: true },
  { source: `/${prefix}/portfolio`, destination: "/work", permanent: true },
  { source: `/${prefix}/advisory-board`, destination: "/about#advisors", permanent: true },
  { source: `/${prefix}/:path*`, destination: "/:path*", permanent: true },
]);

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      ...legacyRedirects,
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/advisory-board", destination: "/about#advisors", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

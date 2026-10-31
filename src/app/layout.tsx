import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import StructuredData from "@/components/seo/StructuredData";
import siteConfig from "@/data/site_config";
import SiteShell from "@/components/layout/SiteShell";

// Self-hosted variable fonts (Inter and Inter Tight, SIL Open Font License).
const bodyFont = localFont({
  src: "../fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-body",
  display: "swap",
});
const headingFont = localFont({
  src: "../fonts/inter-tight-latin.woff2",
  weight: "100 900",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Custom Software, Web & AI Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: "/assets/img/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: "/",
  },
  twitter: { card: "summary_large_image", site: "@Xyvintech" },
};

export const viewport: Viewport = {
  themeColor: "#031331",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <StructuredData type="organization" />
        <SiteShell>{children}</SiteShell>
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}

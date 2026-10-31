import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/styles/index.scss";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import WhatsAppButton from "@/components/sticky/Sticky";
import StructuredData from "@/components/seo/StructuredData";
import siteConfig from "@/data/site_config";

const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const headingFont = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  alternates: { canonical: "/" },
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
        {children}
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}

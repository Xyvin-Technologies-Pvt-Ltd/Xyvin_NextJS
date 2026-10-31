import type { Metadata } from "next";
import siteConfig from "@/data/site_config";

interface PageMetaInput {
  title?: string;
  description: string;
  path: string;
  image?: string;
}

// Builds consistent per-page metadata: canonical URL, Open Graph and Twitter tags.
// Page-level openGraph replaces the parent's, so the default share image is re-added here.
export function pageMetadata({ title, description, path, image = "/opengraph-image" }: PageMetaInput): Metadata {
  const ogTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Software Development Company`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: [image] },
  };
}

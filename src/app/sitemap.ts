import type { MetadataRoute } from "next";
import siteConfig, { absoluteUrl } from "@/data/site_config";
import { getAllBlogPosts } from "@/data/blog_data";
import services from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const { routes } = siteConfig;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = (
    [
    { url: absoluteUrl(routes.home), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl(routes.services), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(routes.work), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(routes.about), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl(routes.contact), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl(routes.blog), changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl(routes.privacy), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl(routes.terms), changeFrequency: "yearly", priority: 0.2 },
    ] as MetadataRoute.Sitemap
  ).map((page) => ({ ...page, lastModified: now }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`${routes.services}/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`${routes.blog}/${post.slug}`),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}

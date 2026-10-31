import React from "react";
import siteConfig, { absoluteUrl } from "@/data/site_config";
import { getAllBlogPosts } from "@/data/blog_data";
import type { Service } from "@/data/services";

type BlogPostLike = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  content: string;
};

type Props =
  | { type: "organization" }
  | { type: "blog" }
  | { type: "article"; data: BlogPostLike }
  | { type: "service"; data: Service };

const organizationId = `${siteConfig.siteUrl}/#organization`;

const publisher = { "@id": organizationId };

function buildData(props: Props) {
  switch (props.type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.siteUrl,
        logo: absoluteUrl("/assets/img/logo.svg"),
        image: absoluteUrl("/opengraph-image"),
        description: siteConfig.description,
        foundingDate: String(siteConfig.foundedYear),
        email: siteConfig.email,
        telephone: siteConfig.phone.e164,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.street}, ${siteConfig.address.landmark}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        openingHours: "Mo-Fr 09:00-18:00",
        areaServed: ["India", "United Arab Emirates", "Oman", "Saudi Arabia", "Qatar"],
        sameAs: Object.values(siteConfig.socials),
      };

    case "blog":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${siteConfig.name} Blog`,
        url: absoluteUrl(siteConfig.routes.blog),
        publisher,
        blogPost: getAllBlogPosts().map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          url: absoluteUrl(`${siteConfig.routes.blog}/${post.slug}`),
        })),
      };

    case "article": {
      const post = props.data;
      const url = absoluteUrl(`${siteConfig.routes.blog}/${post.slug}`);
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.image),
        author: { "@type": "Organization", name: post.author },
        publisher,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: url,
        url,
        keywords: post.tags.join(", "),
        wordCount: post.content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length,
      };
    }

    case "service": {
      const service = props.data;
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: absoluteUrl(`${siteConfig.routes.services}/${service.slug}`),
        provider: publisher,
        areaServed: ["India", "United Arab Emirates", "Oman", "Saudi Arabia", "Qatar"],
      };
    }
  }
}

const StructuredData = (props: Props) => {
  const data = buildData(props);
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be inline; "<" is escaped so content can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
};

export default StructuredData;

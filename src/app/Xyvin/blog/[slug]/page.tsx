import React from "react";
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/blog/BlogDetailPage";
import StructuredData from "@/components/seo/StructuredData";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { getBlogPost, getAllBlogSlugs } from "@/data/blog_data";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogDetailProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Xyvin Technologies Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://xyvintech.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Wrapper>
      <StructuredData type="article" data={post} />
      <HeaderOne />
      <div id="scrollsmoother-container">
        <BlogDetailPage post={post} />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default BlogDetail;

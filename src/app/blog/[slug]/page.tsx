import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { formatPostDate, getAllBlogSlugs, getBlogPost, getRelatedPosts } from "@/data/blog_data";
import siteConfig, { absoluteUrl } from "@/data/site_config";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import PostCard from "@/components/blog/PostCard";
import ShareButtons from "@/components/blog/ShareButtons";
import StructuredData from "@/components/seo/StructuredData";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `${siteConfig.routes.blog}/${post.slug}`,
    image: post.image,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, authors: [post.author], tags: post.tags },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug, 3);
  const url = absoluteUrl(`${siteConfig.routes.blog}/${post.slug}`);

  return (
    <>
      <StructuredData type="article" data={post} />
      <article>
        <header className="bg-paper pb-12 pt-32 sm:pt-40">
          <Container className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
              <Link href={siteConfig.routes.blog} className="hover:text-navy-900">
                ← All articles
              </Link>
            </nav>
            <p className="text-sm text-muted">
              {post.category} · <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readTime}
            </p>
            <h1 className="mt-3 text-display-lg">{post.title}</h1>
            <p className="mt-5 text-lg text-muted">{post.excerpt}</p>
            <p className="mt-6 text-sm text-navy-800">By {post.author}</p>
          </Container>
        </header>

        <Container className="max-w-4xl">
          <div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-lg border border-line bg-paper">
            <Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
          </div>
        </Container>

        <Container className="max-w-3xl py-12 sm:py-16">
          <div className="prose-site" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-12 border-t border-line pt-6">
            <ShareButtons url={url} title={post.title} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="paper" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" title="Related articles" />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand title="Need help with a project like this?" />
    </>
  );
}

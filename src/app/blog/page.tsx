import { pageMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/data/blog_data";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import PostCard from "@/components/blog/PostCard";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Articles from the Xyvin Technologies team on software development, web, cloud and AI.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = [...getAllBlogPosts()].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <StructuredData type="blog" />
      <PageHeader
        breadcrumb={[{ label: "Blog" }]}
        title="Blog"
        intro="Practical notes from our team on building software, websites and AI tools for growing businesses."
      />
      <Section>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i < 3} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

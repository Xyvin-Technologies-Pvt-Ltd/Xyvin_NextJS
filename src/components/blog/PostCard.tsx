import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type BlogPost } from "@/data/blog_data";
import siteConfig from "@/data/site_config";

export default function PostCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group">
      <Link href={`${siteConfig.routes.blog}/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-paper">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
        </div>
        <p className="mt-4 text-sm text-muted">
          {post.category} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h3 className="mt-1 text-xl group-hover:underline group-hover:underline-offset-4">{post.title}</h3>
        <p className="mt-2 text-[15px] text-muted">{post.excerpt}</p>
      </Link>
    </article>
  );
}

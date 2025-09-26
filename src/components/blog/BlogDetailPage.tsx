"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getRelatedPosts } from "@/data/blog_data";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  slug: string;
  image: string;
  authorImage?: string;
}

interface BlogDetailPageProps {
  post: BlogPost;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  const [showShare, setShowShare] = useState(false);
  const relatedPosts = getRelatedPosts(post.slug, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowShare(false);
    } catch (err) {
      console.error("Failed to copy link");
    }
  };

  return (
    <article className="blog-detail-simple">
      {/* Header */}
      <div className="blog-header-simple">
        <div className="container">
          <div className="header-content">
            <Link href="/Xyvin/blog" className="back-button">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="article-meta-simple">
              <span className="category">{post.category}</span>
              <div className="meta-items">
                <div className="meta-item">
                  <Calendar size={14} />
                  {formatDate(post.date)}
                </div>
                <div className="meta-item">
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="meta-item">
                  <User size={14} />
                  {post.author}
                </div>
              </div>
            </div>

            <h1 className="article-title-simple">{post.title}</h1>
            <p className="article-excerpt-simple">{post.excerpt}</p>

            <div className="article-actions">
              <div className="tags-simple">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag-simple">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="share-section">
                <button
                  className="share-button"
                  onClick={() => setShowShare(!showShare)}
                >
                  <Share2 size={16} />
                  Share
                </button>

                {showShare && (
                  <div className="share-menu-simple">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-link"
                    >
                      <Twitter size={14} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-link"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-link"
                    >
                      <Facebook size={14} />
                    </a>
                    <button onClick={handleCopyLink} className="share-link">
                      <LinkIcon size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-simple">
        <div className="container">
          <div className="image-wrapper">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="article-image-simple"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-section-simple">
        <div className="container">
          <div className="content-wrapper-simple">
            <div
              className="article-content-simple"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author */}
            <div className="author-section-simple">
              <div className="author-info-simple">
                <div className="author-avatar-simple">
                  {post.authorImage ? (
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={60}
                      height={60}
                      className="avatar"
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      <User size={24} />
                    </div>
                  )}
                </div>
                <div className="author-details-simple">
                  <h4 className="author-name-simple">{post.author}</h4>
                  <p className="author-bio-simple">
                    Software Developer & Tech Writer sharing insights on modern
                    development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="related-section-simple">
          <div className="container">
            <h3 className="related-title">Related Articles</h3>
            <div className="related-grid-simple">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/Xyvin/blog/${relatedPost.slug}`}
                  className="related-card-simple"
                >
                  <div className="related-image-wrapper">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={300}
                      height={180}
                      className="related-image"
                    />
                  </div>
                  <div className="related-content">
                    <span className="related-category">
                      {relatedPost.category}
                    </span>
                    <h4 className="related-title-text">{relatedPost.title}</h4>
                    <p className="related-excerpt">{relatedPost.excerpt}</p>
                    <div className="related-meta">
                      <span>{relatedPost.readTime}</span>
                      <span>•</span>
                      <span>{formatDate(relatedPost.date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .blog-detail-simple {
          padding-top: 100px;
          background: #ffffff;
        }

        .blog-header-simple {
          padding: 40px 0 60px;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4ecdc4;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 30px;
          transition: color 0.3s ease;
        }

        .back-button:hover {
          color: #45b7d1;
        }

        .article-meta-simple {
          margin-bottom: 30px;
        }

        .category {
          display: inline-block;
          background: #4ecdc4;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .meta-items {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          font-size: 0.9rem;
        }

        .article-title-simple {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin: 30px 0 20px;
        }

        .article-excerpt-simple {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .article-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .tags-simple {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag-simple {
          background: #f8f9fa;
          color: #4ecdc4;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          border: 1px solid #e9ecef;
        }

        .share-section {
          position: relative;
        }

        .share-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 2px solid #4ecdc4;
          color: #4ecdc4;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .share-button:hover {
          background: #4ecdc4;
          color: white;
        }

        .share-menu-simple {
          position: absolute;
          top: 120%;
          right: 0;
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .share-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f8f9fa;
          color: #666;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-link:hover {
          background: #4ecdc4;
          color: white;
        }

        .featured-image-simple {
          padding: 0 0 60px;
        }

        .image-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-image-simple {
          width: 100%;
          height: auto;
          display: block;
        }

        .content-section-simple {
          padding: 80px 0 100px;
        }

        .content-wrapper-simple {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .article-content-simple {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #2c3e50;
          margin-bottom: 80px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .article-content-simple h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 60px 0 30px;
          border-left: 4px solid #4ecdc4;
          padding-left: 25px;
          line-height: 1.3;
        }

        .article-content-simple h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 50px 0 25px;
          line-height: 1.4;
        }

        .article-content-simple p {
          margin-bottom: 28px;
          max-width: none;
        }

        .article-content-simple ul,
        .article-content-simple ol {
          margin: 30px 0;
          padding-left: 35px;
        }

        .article-content-simple li {
          margin-bottom: 12px;
          line-height: 1.8;
        }

        .article-content-simple blockquote {
          border-left: 4px solid #4ecdc4;
          background: #f8f9fa;
          padding: 30px 35px;
          margin: 40px 0;
          font-style: italic;
          color: #555;
          font-size: 1.1rem;
          line-height: 1.7;
          border-radius: 8px;
        }

        .article-content-simple pre {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 30px;
          margin: 40px 0;
          overflow-x: auto;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .article-content-simple code {
          background: #f8f9fa;
          padding: 3px 8px;
          border-radius: 6px;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.9em;
          color: #d63384;
          border: 1px solid #e9ecef;
        }

        .article-content-simple h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 40px 0 20px;
          line-height: 1.4;
        }

        .article-content-simple strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        .author-section-simple {
          border-top: 1px solid #e9ecef;
          padding-top: 40px;
        }

        .author-info-simple {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .author-avatar-simple {
          flex-shrink: 0;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-placeholder {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        .author-name-simple {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px;
        }

        .author-bio-simple {
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .related-section-simple {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .related-title {
          font-size: 2rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 50px;
        }

        .related-grid-simple {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .related-card-simple {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .related-card-simple:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          color: inherit;
        }

        .related-image-wrapper {
          height: 180px;
          overflow: hidden;
        }

        .related-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .related-card-simple:hover .related-image {
          transform: scale(1.05);
        }

        .related-content {
          padding: 25px;
        }

        .related-category {
          display: inline-block;
          background: #4ecdc4;
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .related-title-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 10px;
          line-height: 1.4;
        }

        .related-excerpt {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0 0 15px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .related-meta {
          color: #999;
          font-size: 0.85rem;
          display: flex;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .blog-detail-simple {
            padding-top: 80px;
          }

          .blog-header-simple {
            padding: 30px 0 40px;
          }

          .content-wrapper-simple {
            padding: 0 15px;
          }

          .content-section-simple {
            padding: 60px 0 80px;
          }

          .article-content-simple {
            font-size: 1.1rem;
            line-height: 1.8;
          }

          .article-content-simple h2 {
            font-size: 1.7rem;
            margin: 40px 0 20px;
            padding-left: 20px;
          }

          .article-content-simple h3 {
            font-size: 1.3rem;
            margin: 35px 0 20px;
          }

          .article-content-simple p {
            margin-bottom: 24px;
          }

          .article-content-simple blockquote {
            padding: 20px 25px;
            margin: 30px 0;
          }

          .article-content-simple pre {
            padding: 20px;
            margin: 30px 0;
            font-size: 0.9rem;
          }

          .article-actions {
            justify-content: center;
            text-align: center;
          }

          .meta-items {
            flex-direction: column;
            gap: 10px;
          }

          .author-info-simple {
            flex-direction: column;
            text-align: center;
          }

          .related-grid-simple {
            grid-template-columns: 1fr;
          }

          .share-menu-simple {
            right: 50%;
            transform: translateX(50%);
          }
        }

        @media (max-width: 480px) {
          .tags-simple {
            justify-content: center;
          }
        }
      `}</style>
    </article>
  );
};

export default BlogDetailPage;

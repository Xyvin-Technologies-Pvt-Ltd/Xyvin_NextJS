"use client";
import React, { useState } from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/data/blog_data";

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

const blogPosts: BlogPost[] = getAllBlogPosts();

const categories = [
  "All",
  "AI & Technology",
  "Web Development",
  "API Development",
  "Cloud Computing",
  "Mobile Development",
  "Development Tools",
];

const ModernBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <section className="modern-blog">
      {/* Blog Hero */}
      <div className="blog-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-badge">
                <span className="badge-icon">📝</span>
                Tech Insights & Expertise
              </div>
              <h1 className="hero-title">
                Latest Insights from
                <span className="text-gradient"> Xyvin Tech</span>
              </h1>
              <p className="hero-description">
                Stay ahead with expert insights on software development, AI,
                cloud computing, and emerging technologies from our team of
                specialists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      {/* <div className="blog-controls">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <div className="featured-section">
          <div className="container">
            <h2 className="section-title">Featured Articles</h2>
            <div className="row">
              {featuredPosts.map((post) => (
                <div key={post.id} className="col-lg-6 mb-4">
                  <article className="featured-card">
                    <div className="card-header">
                      <span className="category-tag">{post.category}</span>
                      <span className="featured-badge">⭐ Featured</span>
                    </div>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="card-meta">
                      <span className="author">{post.author}</span>
                      <span className="date">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <div className="card-tags">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/Xyvin/blog/${post.slug}`}
                      className="read-more"
                    >
                      Read Article →
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="blog-grid">
        <div className="container">
          <h2 className="section-title">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
            <span className="results-count">
              ({filteredPosts.length} articles)
            </span>
          </h2>
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <article className="blog-card">
                  <div className="card-header">
                    <span className="category-tag">{post.category}</span>
                    {post.featured && (
                      <span className="featured-badge">⭐</span>
                    )}
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-meta">
                    <span className="author">{post.author}</span>
                    <span className="date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <div className="card-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/Xyvin/blog/${post.slug}`} className="read-more">
                    Read More →
                  </Link>
                </article>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .modern-blog {
          padding-top: 80px;
        }

        .blog-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 0;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid #1d4ed8;
          border-radius: 50px;
          padding: 8px 20px;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .blog-controls {
          background: white;
          padding: 40px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .search-box {
          position: relative;
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 12px 20px 12px 50px;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #45b7d1;
          box-shadow: 0 0 0 3px rgba(69, 183, 209, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
        }

        .category-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          background: white;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: #45b7d1;
          background: #45b7d1;
          color: white;
        }

        .featured-section {
          background: #f8f9fa;
          padding: 80px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          text-align: center;
        }

        .results-count {
          font-size: 1rem;
          font-weight: 400;
          color: #666;
        }

        .featured-card,
        .blog-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .featured-card:hover,
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .category-tag {
          background: linear-gradient(135deg, #45b7d1 0%, #1d4ed8 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .featured-badge {
          background: #ffd700;
          color: #333;
          padding: 4px 8px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          margin-bottom: 15px;
        }

        .card-excerpt {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          color: #888;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .card-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tag {
          background: #f8f9fa;
          color: #666;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 500;
        }

        .read-more {
          color: #45b7d1;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .read-more:hover {
          color: #4ecdc4;
          transform: translateX(5px);
        }

        .blog-grid {
          padding: 80px 0;
        }

        .no-results {
          text-align: center;
          padding: 60px 0;
          color: #666;
          font-size: 1.1rem;
        }

        @media (max-width: 767px) {
          .blog-hero {
            padding: 60px 0;
          }

          .category-filters {
            justify-content: center;
            margin-top: 20px;
          }

          .card-meta {
            justify-content: center;
          }

          .featured-section,
          .blog-grid {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernBlog;

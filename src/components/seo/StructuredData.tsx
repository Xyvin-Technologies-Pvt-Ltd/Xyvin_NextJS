import React from "react";

interface StructuredDataProps {
  type: "blog" | "services" | "organization" | "article";
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Xyvin Technologies",
          url: "https://xyvintech.com",
          logo: "https://xyvintech.com/assets/img/logo.svg",
          description:
            "Leading IT solutions provider specializing in custom software development, web applications, AI integration, and digital transformation services.",
          foundingDate: "2019",
          address: {
            "@type": "PostalAddress",
            streetAddress: "dewSpace Business Center",
            addressLocality: "Ernakulam North",
            addressRegion: "Kerala",
            postalCode: "682018",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-813-891-6303",
            contactType: "customer service",
            email: "admin@xyvin.com",
          },
          sameAs: [
            "https://linkedin.com/company/xyvin-technologies",
            "https://twitter.com/xyvintech",
          ],
          serviceArea: {
            "@type": "Place",
            name: "Global",
          },
        };

      case "services":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "IT Services",
          provider: {
            "@type": "Organization",
            name: "Xyvin Technologies",
            url: "https://xyvintech.com",
          },
          description:
            "Comprehensive IT services including custom software development, web applications, mobile development, ERP solutions, API integration, and AI/ML services.",
          offers: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Software Development",
                description:
                  "Tailored software solutions for business operations and automation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Responsive, secure, and scalable web applications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ERP Solutions",
                description:
                  "Enterprise resource planning systems for business management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "API Integration",
                description:
                  "Seamless integration between systems and third-party services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Machine Learning",
                description: "Intelligent automation and AI-powered solutions",
              },
            },
          ],
          areaServed: {
            "@type": "Place",
            name: "Global",
          },
        };

      case "blog":
        return {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Xyvin Tech Blog",
          description:
            "Expert insights on software development, AI, cloud computing, and emerging technologies",
          url: "https://xyvintech.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Xyvin Technologies",
            logo: {
              "@type": "ImageObject",
              url: "https://xyvintech.com/assets/img/logo.svg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://xyvintech.com/blog",
          },
          blogPost: [
            {
              "@type": "BlogPosting",
              headline: "The Future of AI in Enterprise Software Development",
              description:
                "Discover how artificial intelligence is revolutionizing enterprise software development",
              datePublished: "2024-12-10",
              author: {
                "@type": "Organization",
                name: "Xyvin Tech Team",
              },
              publisher: {
                "@type": "Organization",
                name: "Xyvin Technologies",
              },
            },
            {
              "@type": "BlogPosting",
              headline:
                "Building Scalable Web Applications with Next.js and TypeScript",
              description:
                "Learn the best practices for creating high-performance, scalable web applications",
              datePublished: "2024-12-08",
              author: {
                "@type": "Organization",
                name: "Xyvin Development Team",
              },
              publisher: {
                "@type": "Organization",
                name: "Xyvin Technologies",
              },
            },
          ],
        };
        

      case "article":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title,
          description: data.excerpt,
          image: `https://xyvintech.com${data.image}`,
          author: {
            "@type": "Organization",
            name: data.author,
          },
          publisher: {
            "@type": "Organization",
            name: "Xyvin Technologies",
            logo: {
              "@type": "ImageObject",
              url: "https://xyvintech.com/assets/img/logo.svg",
            },
          },
          datePublished: data.date,
          dateModified: data.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://xyvintech.com/Xyvin/blog/${data.slug}`,
          },
          keywords: data.tags.join(", "),
          wordCount: data.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
          timeRequired: data.readTime,
          url: `https://xyvintech.com/Xyvin/blog/${data.slug}`,
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

import React from "react";
import ModernBlog from "@/components/blog/ModernBlog";
import ContactCTA from "@/components/contact/ContactCTA";
import StructuredData from "@/components/seo/StructuredData";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "Tech Blog - Xyvin Technologies | Latest Insights & Tutorials",
  description:
    "Stay updated with the latest trends in software development, AI, cloud computing, and emerging technologies. Expert insights and tutorials from Xyvin's tech team.",
  keywords:
    "software development, AI, machine learning, web development, cloud computing, mobile development, tech blog, programming tutorials",
  openGraph: {
    title: "Tech Blog - Xyvin Technologies",
    description:
      "Expert insights on software development, AI, and emerging technologies",
    type: "website",
    url: "https://xyvintech.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog - Xyvin Technologies",
    description:
      "Expert insights on software development, AI, and emerging technologies",
  },
};

const index = () => {
  return (
    <Wrapper>
      <StructuredData type="blog" />
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ModernBlog />
        <ContactCTA />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

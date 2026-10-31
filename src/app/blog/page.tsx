import { pageMetadata } from "@/lib/metadata";
import React from "react";
import ModernBlog from "@/components/blog/ModernBlog";
import ContactCTA from "@/components/contact/ContactCTA";
import StructuredData from "@/components/seo/StructuredData";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Articles from the Xyvin Technologies team on software development, web, cloud and AI.",
  path: "/blog",
});

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

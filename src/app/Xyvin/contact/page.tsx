import React from "react";
import ModernContact from "@/components/contact/ModernContact";
import StructuredData from "@/components/seo/StructuredData";
import ModernFooter from "@/layouts/footers/ModernFooter";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "Contact Us - Xyvin Technologies | Get in Touch for IT Solutions",
  description:
    "Ready to transform your business? Contact Xyvin Technologies for custom software development, web applications, AI solutions, and digital transformation services. Get a free consultation today.",
  keywords:
    "contact xyvin technologies, IT consultation, software development quote, custom development services, web development company Kochi, AI solutions contact",
  openGraph: {
    title: "Contact Xyvin Technologies - Let's Build Something Amazing",
    description:
      "Get in touch with our expert team for custom software development and digital transformation solutions",
    type: "website",
    url: "https://xyvintech.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Xyvin Technologies",
    description:
      "Get in touch with our expert team for custom software development and digital transformation solutions",
  },
};

const index = () => {
  return (
    <Wrapper>
      <StructuredData type="organization" />
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ModernContact />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

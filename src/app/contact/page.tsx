import type { Metadata } from "next";
import React from "react";
import ModernContact from "@/components/contact/ModernContact";
import ModernFooter from "@/layouts/footers/ModernFooter";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Xyvin Technologies about your software, web, mobile or AI project. Call, WhatsApp or send us a message and we'll reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us", url: "/contact" },
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ModernContact />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

import type { Metadata } from "next";
import React from "react";
import ServiceHero from "@/components/hero/ServiceHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessFlow from "@/components/process/ProcessFlow";
import TechStack from "@/components/tech/TechStack";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web development, mobile apps, ERP systems, API integration and AI automation from Xyvin Technologies in Kochi.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Services", url: "/services" },
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ServiceHero />
        <ServicesGrid />
        <ProcessFlow />
        <TechStack />
        <ContactCTA />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

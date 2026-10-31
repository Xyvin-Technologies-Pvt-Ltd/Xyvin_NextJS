import { pageMetadata } from "@/lib/metadata";
import React from "react";
import ServiceHero from "@/components/hero/ServiceHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessFlow from "@/components/process/ProcessFlow";
import TechStack from "@/components/tech/TechStack";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Custom software, web development, mobile apps, ERP systems, API integration and AI automation from Xyvin Technologies in Kochi.",
  path: "/services",
});

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

import type { Metadata } from "next";
import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import CompanyOverview from "@/components/company/CompanyOverview";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ContactCTA from "@/components/contact/ContactCTA";
import ModernFooter from "@/layouts/footers/ModernFooter";
import Wrapper from "@/layouts/Wrapper";
import BrandHomeOne from "@/components/brand/BrandHomeOne";

export const metadata: Metadata = {
  description:
    "Xyvin Technologies builds custom software, web platforms, mobile apps, ERP systems and AI automation for growing businesses in India and the GCC.",
  alternates: { canonical: "/" },
  openGraph: { title: "Xyvin Technologies | Custom Software, Web & AI Solutions", url: "/" },
};

const index = () => {
  return (
    <>
      <Wrapper>
        <HeaderOne />
        <div id="scrollsmoother-container">
          <HeroHomeOne />
          <CompanyOverview />
          <ServicesGrid />
          <BrandHomeOne />

          {/* <ProjectShowcase /> */}
          <ContactCTA />
          <ModernFooter />
        </div>
      </Wrapper>
    </>
  );
};

export default index;

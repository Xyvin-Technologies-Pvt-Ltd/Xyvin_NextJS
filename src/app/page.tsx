import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import CompanyOverview from "@/components/company/CompanyOverview";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ContactCTA from "@/components/contact/ContactCTA";
import ModernFooter from "@/layouts/footers/ModernFooter";
import Wrapper from "@/layouts/Wrapper";
import Sticky from "@/components/sticky/Sticky";
import BrandHomeOne from "@/components/brand/BrandHomeOne";

export const metadata = {
  title: "Xyvin Tech - Leading IT Solutions & Software Development",
  description:
    "Transform your business with Xyvin's cutting-edge IT solutions, web development, and AI-powered software engineering services.",
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
      <Sticky />
    </>
  );
};

export default index;

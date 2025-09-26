import React from "react";
import PortfolioHero from "@/components/hero/PortfolioHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import TechStack from "@/components/tech/TechStack";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "Portfolio - Xyvin Technologies | Our Projects & Case Studies",
  description:
    "Explore our portfolio of successful IT projects including web development, mobile apps, ERP solutions, and AI/ML implementations.",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <PortfolioHero />
        <ProjectShowcase />
        <TechStack />
        <ContactCTA />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

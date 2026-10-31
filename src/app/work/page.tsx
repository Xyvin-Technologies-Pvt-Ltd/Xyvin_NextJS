import { pageMetadata } from "@/lib/metadata";
import React from "react";
import PortfolioHero from "@/components/hero/PortfolioHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import TechStack from "@/components/tech/TechStack";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Websites, platforms, portals and apps Xyvin Technologies has built for clients such as GOEC, KSSIA, Khedmah and Double Horse.",
  path: "/work",
});

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

import { pageMetadata } from "@/lib/metadata";
import React from "react";
import AboutHero from "@/components/hero/AboutHero";
import TeamSection from "@/components/team/TeamSection";
import ClientTestimonials from "@/components/testimonials/ClientTestimonials";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet the team and advisors behind Xyvin Technologies, a software company in Kochi building web platforms, ERP systems and AI automation for clients in India and the GCC.",
  path: "/about",
});

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <AboutHero />
        <TeamSection />
        <ClientTestimonials />
        <BrandHomeOne />
        <ContactCTA />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default index;

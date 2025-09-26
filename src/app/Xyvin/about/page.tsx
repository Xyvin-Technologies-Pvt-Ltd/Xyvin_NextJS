import React from "react";
import AboutHero from "@/components/hero/AboutHero";
import TeamSection from "@/components/team/TeamSection";
import ClientTestimonials from "@/components/testimonials/ClientTestimonials";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "About Xyvin - Leading IT Solutions Provider",
  description:
    "Learn about Xyvin Technologies - Your trusted partner for innovative IT solutions, software development, and digital transformation services.",
};

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

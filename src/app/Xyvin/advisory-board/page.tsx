import React from "react";
import AdvisoryBoardHero from "@/components/advisory/AdvisoryBoardHero";
import AdvisoryBoardSection from "@/components/advisory/AdvisoryBoardSection";
import ContactCTA from "@/components/contact/ContactCTA";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "Advisory Board - Xyvin Technologies",
  description:
    "Meet our distinguished advisory board of industry experts and thought leaders who provide strategic guidance to Xyvin Technologies.",
};

const AdvisoryBoardPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <AdvisoryBoardHero />
        <AdvisoryBoardSection />
        <ContactCTA />
        <ModernFooter />
      </div>
    </Wrapper>
  );
};

export default AdvisoryBoardPage;

import React from "react";
import ServiceHero from "@/components/hero/ServiceHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessFlow from "@/components/process/ProcessFlow";
import TechStack from "@/components/tech/TechStack";
import ContactCTA from "@/components/contact/ContactCTA";
import StructuredData from "@/components/seo/StructuredData";
import Wrapper from "@/layouts/Wrapper";
import ModernFooter from "@/layouts/footers/ModernFooter";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title: "IT Services - Xyvin Technologies | Custom Software & Web Development",
  description:
    "Comprehensive IT services including custom software development, web & mobile applications, ERP solutions, API integration, and AI/ML services. Transform your business with Xyvin.",
  keywords:
    "custom software development, web development, mobile app development, ERP solutions, API integration, AI services, machine learning, cloud computing, IT consulting",
  openGraph: {
    title: "IT Services - Xyvin Technologies",
    description:
      "Comprehensive IT services for modern businesses - Custom software, web development, AI integration, and more",
    type: "website",
    url: "https://xyvintech.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services - Xyvin Technologies",
    description: "Comprehensive IT services for modern businesses",
  },
};

const index = () => {
  return (
    <Wrapper>
      <StructuredData type="services" />
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

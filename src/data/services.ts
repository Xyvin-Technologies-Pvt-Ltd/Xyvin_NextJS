// Services offered. Used by the services pages, the footer and the contact form.
// Copy is a draft for review.

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  relatedProjects: string[]; // project slugs from src/data/projects.ts; only list confirmed matches
}

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary: "Software built around how your business actually works.",
    description:
      "When off-the-shelf tools don't fit, we build software that does. We start by mapping how your team works today, then design and build tools that remove manual steps, keep data in one place and grow with you.",
    deliverables: [
      "Internal tools and dashboards",
      "Workflow and approval systems",
      "Customer and partner portals",
      "Integrations with the systems you already use",
    ],
    relatedProjects: ["hef", "family-tree"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Fast, secure websites and web apps that are easy to update.",
    description:
      "From company websites to full web applications, we build sites that load quickly, rank well and are simple for your team to update. Every build is responsive, accessible and set up with analytics from day one.",
    deliverables: [
      "Company and marketing websites",
      "E-commerce stores",
      "Web applications and member portals",
      "CMS setup and team training",
    ],
    relatedProjects: ["double-horse", "basari-opticals", "atlantis-medical"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    summary: "iOS and Android apps from a single, cross-platform codebase.",
    description:
      "We design and build mobile apps with Flutter and React Native, so you launch on iOS and Android at the same time. We also build the admin panel and APIs behind the app, and handle the store release.",
    deliverables: [
      "Flutter and React Native apps",
      "App Store and Google Play release",
      "Push notifications and offline support",
      "Admin panels and APIs behind the app",
    ],
    relatedProjects: ["khedmah", "worko", "family-tree"],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    summary: "Inventory, finance, HR and operations in one system.",
    description:
      "We build ERP systems shaped to your processes instead of forcing you into someone else's. Inventory, orders, billing, HR and reporting live in one place, with dashboards that show what's happening across the business.",
    deliverables: [
      "Custom ERP modules",
      "Inventory and order management",
      "Billing, finance and HR",
      "Reports and management dashboards",
    ],
    relatedProjects: [], // TODO: add ERP projects
  },
  {
    slug: "api-integration",
    title: "API Integration",
    summary: "Connect your apps so data moves without manual work.",
    description:
      "We connect the tools you already use, such as payment gateways, CRMs, accounting software and messaging platforms, so information flows between them automatically and your team stops copying data by hand.",
    deliverables: [
      "Payment gateway and third-party API integration",
      "Sync between CRM, ERP and accounting tools",
      "Custom REST APIs",
      "Webhooks and scheduled automations",
    ],
    relatedProjects: [], // TODO: add integration projects
  },
  {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    summary: "Chatbots and AI agents that take over repetitive work.",
    description:
      "We build AI agents and chatbots that answer customers, process documents and run routine workflows, connected to your own data and systems. We start with one well-defined task, measure the time saved, then expand.",
    deliverables: [
      "Customer support chatbots for web and WhatsApp",
      "Document reading and data extraction",
      "Workflow automation with AI steps",
      "Internal knowledge assistants",
    ],
    relatedProjects: [], // TODO: add AI projects
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const contactServiceOptions = [...services.map((s) => s.title), "Other"];

export default services;

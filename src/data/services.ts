// Services offered. Used by the services pages, the footer and the contact form.

export interface Service {
  slug: string;
  title: string;
  summary: string; // one line, used on cards
  description: string; // the pitch: problem, approach, result
  idealFor: string; // who usually hires us for this
  deliverables: string[];
  relatedProjects: string[]; // project slugs from src/data/projects.ts; only list confirmed matches
}

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary: "Software shaped around how your business works, not the other way round.",
    description:
      "When off-the-shelf tools force your team into spreadsheets and workarounds, we build software that fits. We map how work actually gets done today, then design tools that remove manual steps, keep data in one place and scale as you grow. You own the code, and it's documented so any team can maintain it.",
    idealFor: "Companies that have outgrown spreadsheets or generic SaaS tools.",
    deliverables: [
      "Internal tools, dashboards and admin panels",
      "Workflow, booking and approval systems",
      "Customer, partner and member portals",
      "Ongoing support and improvements after launch",
    ],
    relatedProjects: ["hef", "family-tree"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Websites and web apps that load fast, rank well and are easy to update.",
    description:
      "From a company website to a full web application, we build for speed, search visibility and easy editing. Every site is responsive, accessible and launched with analytics in place, so you can see what's working from day one, and your team can update content without calling a developer.",
    idealFor: "Brands that need a site that wins customers, not just one that looks good.",
    deliverables: [
      "Company and marketing websites",
      "E-commerce stores",
      "Web applications and member portals",
      "CMS setup, SEO foundations and team training",
    ],
    relatedProjects: ["double-horse", "basari-opticals", "atlantis-medical"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    summary: "iOS and Android apps from a single codebase, launched together.",
    description:
      "We design and build mobile apps in Flutter and React Native, so you launch on iOS and Android at the same time and maintain one codebase instead of two. We also build the admin panel and APIs behind the app, and take care of App Store and Google Play release.",
    idealFor: "Businesses and startups taking a service or product to mobile.",
    deliverables: [
      "Flutter and React Native apps",
      "Admin panels and APIs behind the app",
      "Push notifications, payments and offline support",
      "App Store and Google Play release",
    ],
    relatedProjects: ["khedmah", "worko", "family-tree"],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    summary: "Operations, inventory, finance and HR in one system built around you.",
    description:
      "Instead of bending your processes to fit a generic ERP, we build one around them. Orders, stock, billing, people and reporting live in one place, with dashboards that show how the business is doing at a glance. We roll it out in stages, so your team keeps working while the new system comes online.",
    idealFor: "Growing companies juggling several disconnected tools.",
    deliverables: [
      "Custom ERP modules",
      "Inventory, purchasing and order management",
      "Billing, finance and HR",
      "Reports and management dashboards",
    ],
    relatedProjects: [], // TODO: add ERP projects
  },
  {
    slug: "api-integration",
    title: "API Integration",
    summary: "Connect your tools so data moves on its own, without copy-paste.",
    description:
      "We connect the systems you already rely on, such as payment gateways, CRMs, accounting software and messaging apps, so information flows between them automatically. Your team stops re-typing data, errors drop, and you get one reliable picture of the business.",
    idealFor: "Teams losing hours moving data between systems by hand.",
    deliverables: [
      "Payment gateway and third-party API integration",
      "Sync between CRM, ERP and accounting tools",
      "Custom REST APIs for your products and partners",
      "Webhooks and scheduled automations",
    ],
    relatedProjects: [], // TODO: add integration projects
  },
  {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    summary: "Practical AI that takes repetitive work off your team's plate.",
    description:
      "We build AI agents and chatbots that answer customers, read documents and run routine workflows, connected to your own data and systems. We start with one well-defined task, measure the time it saves, and expand from there, so you invest in what's proven to work rather than in hype.",
    idealFor: "Businesses with high-volume, repetitive tasks in support or operations.",
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

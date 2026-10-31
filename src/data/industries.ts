// Industries Xyvin builds for. `clients` are display names on the homepage tiles;
// `projectSlugs` (from src/data/projects.ts) drive the industry filter on the Work page.
// Summaries are draft copy for review.

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  clients: string[];
  projectSlugs: string[];
}

export const industries: Industry[] = [
  {
    slug: "loyalty",
    name: "Loyalty",
    summary: "Points, rewards and membership programmes that keep customers coming back.",
    clients: [], // TODO: add clients once a loyalty project is on the site
    projectSlugs: [],
  },
  {
    slug: "ev-charging",
    name: "EV charging",
    summary: "Apps and platforms to find, book and pay for charging.",
    clients: ["GOEC"],
    projectSlugs: ["goec"],
  },
  {
    slug: "community-apps",
    name: "Community apps",
    summary: "Member portals and apps for associations, chambers and communities.",
    clients: ["KSSIA", "ITCC", "IPA", "AKCAF"],
    projectSlugs: ["kssia", "itcc", "ipa", "akcaf", "family-tree"],
  },
  {
    slug: "lms",
    name: "LMS",
    summary: "Learning platforms for courses, training programmes and academies.",
    clients: ["AIITS", "IAO", "Special40"],
    projectSlugs: ["aiits", "international-academy-of-osteopathy"],
  },
  {
    slug: "global-trading",
    name: "Global trading",
    summary: "Platforms that help trading businesses manage partners, products and orders across borders.",
    clients: [], // TODO: add clients once a trading project is on the site
    projectSlugs: [],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    summary: "Online stores that are fast, easy to manage and built to sell.",
    clients: ["Double Horse", "Basari Opticals", "myG"],
    projectSlugs: ["double-horse", "basari-opticals"],
  },
  {
    slug: "event-management",
    name: "Event management",
    summary: "Software for planning, registering and running events.",
    clients: ["Azavista"],
    projectSlugs: ["azavista"],
  },
];

export const industriesWithProjects = industries.filter((i) => i.projectSlugs.length > 0);

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export default industries;

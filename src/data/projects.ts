import type { StaticImageData } from "next/image";
import doubleHorse from "@/assets/img/portfolio_1.jpg";
import goec from "@/assets/img/portfolio_2.jpg";
import basari from "@/assets/img/portfolio_3.jpg";
import xcard from "@/assets/img/portfolio_4.jpg";
import worko from "@/assets/img/portfolio_6.jpg";
import azavista from "@/assets/img/portfolio_7.jpg";
import gaia from "@/assets/img/portfolio_8.jpg";
import atlantis from "@/assets/img/portfolio_9.jpg";
import familyTree from "@/assets/img/familytree.png";
import akcaf from "@/assets/img/Frame 1171276651.png";
import hef from "@/assets/img/HEF 1.png";
import ipa from "@/assets/img/ipa.png";
import itcc from "@/assets/img/ITCC.png";
import kssia from "@/assets/img/kssia 1.png";
import skopick from "@/assets/img/stoppick.png";
import aiits from "@/assets/img/AIITS.png";
import khedmah from "@/assets/img/khedmah.png";

export const projectCategories = ["Websites", "E-commerce", "Platforms & portals", "Mobile apps"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
  gallery?: StaticImageData[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string; // one line, draft for review
  image: StaticImageData;
  link?: string; // live site
  featured?: boolean;
  caseStudy?: CaseStudy; // add to publish a /work/[slug] page
}

// Names were checked against each screenshot. Several images were mislabelled in the
// old portfolio (e.g. "Atlantis Medical" showed GAIA Sanctuary).
export const projects: Project[] = [
  {
    slug: "goec",
    title: "GOEC",
    category: "Platforms & portals",
    description: "Digital platform and app for GOEC, an EV charging network in India.",
    image: goec,
    link: "https://www.goecworld.com/",
    featured: true,
  },
  {
    slug: "kssia",
    title: "KSSIA",
    category: "Platforms & portals",
    description: "Member portal for the Kerala State Small Industries Association.",
    image: kssia,
    featured: true,
  },
  {
    slug: "khedmah",
    title: "Khedmah",
    category: "Mobile apps",
    description: "Service platform app for Khedmah.",
    image: khedmah,
    featured: true,
  },
  {
    slug: "azavista",
    title: "Azavista",
    category: "Platforms & portals",
    description: "Web work for Azavista's event management software.",
    image: azavista,
    link: "https://www.azavista.com/",
    featured: true,
  },
  {
    slug: "basari-opticals",
    title: "Basari Opticals",
    category: "E-commerce",
    description: "Online eyewear store for Basari Opticals in the UAE.",
    image: basari,
    link: "https://basariopticals.com/",
    featured: true,
  },
  {
    slug: "double-horse",
    title: "Double Horse",
    category: "E-commerce",
    description: "E-commerce website for Double Horse, a Kerala food brand.",
    image: doubleHorse,
    link: "https://doublehorse.in/",
    featured: true,
  },
  {
    slug: "itcc",
    title: "Indo Transworld Chamber of Commerce",
    category: "Platforms & portals",
    description: "Member management dashboard for ITCC.",
    image: itcc,
  },
  {
    slug: "ipa",
    title: "International Promoters Association",
    category: "Platforms & portals",
    description: "Member dashboard and web platform for IPA.",
    image: ipa,
  },
  {
    slug: "akcaf",
    title: "AKCAF",
    category: "Platforms & portals",
    description: "Web and mobile platform for AKCAF.",
    image: akcaf,
  },
  {
    slug: "atlantis-medical",
    title: "Atlantis Medical",
    category: "Websites",
    description: "Website for a hair transplant clinic in Melbourne.",
    image: atlantis,
    link: "https://atlantismedical.com.au/",
  },
  {
    slug: "worko",
    title: "Worko",
    category: "Mobile apps",
    description: "Job portal app connecting workers and employers in India.",
    image: worko,
    link: "https://www.workoindia.com/",
  },
  {
    slug: "aiits",
    title: "AIITS",
    category: "Platforms & portals",
    description: "Education management system for AIITS.",
    image: aiits,
  },
  {
    slug: "hef",
    title: "HEF",
    category: "Platforms & portals",
    description: "Web platform with dashboards for HEF.",
    image: hef,
  },
  {
    slug: "family-tree",
    title: "Family Tree App",
    category: "Mobile apps",
    description: "Family tree app with a web dashboard and mobile app.",
    image: familyTree,
  },
  {
    slug: "xcard",
    title: "xCard",
    category: "Mobile apps",
    // TODO: confirm this is the Buziness Connect project (the old card linked to buzinessconnect.com).
    description: "Mobile app for sharing digital business cards.",
    image: xcard,
  },
  {
    slug: "skopick",
    title: "Skopick",
    category: "Websites",
    description: "Website for Skopick.",
    image: skopick,
  },
  {
    slug: "gaia-sanctuary",
    title: "GAIA Sanctuary",
    category: "Websites",
    // TODO: add the live link if there is one.
    description: "Website for GAIA Sanctuary.",
    image: gaia,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudies = projects.filter((p) => p.caseStudy);

export default projects;

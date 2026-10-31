// Single source of truth for company details, links and the numbers shown on the site.
// Update values here instead of editing individual components.

const address = {
  street: "67/440, 2nd Floor, Mather Square",
  landmark: "Opp. North Railway Station",
  city: "Kochi",
  region: "Kerala",
  postalCode: "682018",
  country: "IN",
  countryName: "India",
};

export const siteConfig = {
  name: "Xyvin Technologies",
  shortName: "Xyvin",
  legalName: "Xyvin Technologies Private Limited",
  siteUrl: "https://www.xyvin.com",
  description:
    "Xyvin Technologies builds custom software, web platforms, ERP systems and AI automation for growing businesses in India and the GCC.",
  // TODO: confirm founding year (taken from the old structured data).
  foundedYear: 2019,

  email: "admin@xyvin.com",
  // TODO: confirm the address job applications should go to.
  careersEmail: "admin@xyvin.com",
  phone: {
    display: "+91 813 891 6303",
    href: "tel:+918138916303",
    e164: "+918138916303",
  },
  whatsapp: {
    number: "918138916303",
    message: "Hello, I'd like to know more about your services.",
  },
  hours: "Mon–Fri, 9 AM–6 PM IST",
  responseTime: "within 24 hours",

  address,
  addressLines: [
    address.street,
    address.landmark,
    `${address.city}, ${address.region} ${address.postalCode}, ${address.countryName}`,
  ],
  offices: ["Kochi, India", "Dubai, UAE"],

  socials: {
    linkedin: "https://www.linkedin.com/company/xyvin-technologies-pvt-ltd/",
    instagram: "https://www.instagram.com/xyvintech/",
    facebook: "https://www.facebook.com/profile.php?id=61559679521641",
    x: "https://x.com/Xyvintech",
  },

  // Calendly / Cal.com link for booking calls. Leave empty to send people to the contact page.
  bookingUrl: "",

  routes: {
    home: "/",
    about: "/about",
    advisors: "/about#advisors",
    services: "/services",
    work: "/work",
    blog: "/blog",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  },

  // TODO: replace with verified figures before launch. These are the most conservative
  // numbers that were already on the site.
  stats: [
    { value: "50+", label: "Projects delivered" },
    { value: "50+", label: "Clients" },
    { value: "2", label: "Offices: Kochi & Dubai" },
  ],
};

export const whatsappUrl = (message: string = siteConfig.whatsapp.message) =>
  `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Mather Square, ${address.street}, ${address.city} ${address.postalCode}`
)}`;

export const bookingHref = siteConfig.bookingUrl || siteConfig.routes.contact;

export const absoluteUrl = (path: string = "/") => new URL(path, siteConfig.siteUrl).toString();

export default siteConfig;

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
    "Xyvin Technologies is a software development company that designs, builds and supports web platforms, mobile apps, ERP systems and AI tools for businesses worldwide.",
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

  // Countries with Xyvin clients, shown on the global presence map.
  // iso = ISO 3166-1 numeric code; lon/lat place the pin; stem = pin height (to keep nearby pins apart);
  // clients = optional names shown when the country is selected. TODO: add missing countries and clients.
  clientCountries: [
    { name: "India", iso: "356", lon: 77.5, lat: 20.5, continent: "Asia", stem: 70, clients: ["KSSIA", "GOEC", "Double Horse", "myG"] },
    { name: "United Arab Emirates", short: "UAE", iso: "784", lon: 54.4, lat: 24.2, continent: "Asia", stem: 105, clients: ["Basari Opticals"] },
    { name: "Oman", iso: "512", lon: 57.5, lat: 21.5, continent: "Asia", stem: 55, clients: ["Continuity Oman"] },
    { name: "United Kingdom", short: "UK", iso: "826", lon: -1.6, lat: 52.6, continent: "Europe", stem: 92, clients: [] as string[] },
    { name: "Belgium", iso: "056", lon: 4.5, lat: 50.6, continent: "Europe", stem: 46, clients: [] as string[] },
    { name: "United States", short: "USA", iso: "840", lon: -96, lat: 38.5, continent: "North America", stem: 70, clients: [] as string[] },
    { name: "Singapore", iso: "702", lon: 103.8, lat: 1.35, continent: "Asia", stem: 70, clients: [] as string[] },
    { name: "Australia", iso: "036", lon: 144.9, lat: -37.8, continent: "Australia", stem: 70, clients: ["Atlantis Medical"] },
  ],
};

export const whatsappUrl = (message: string = siteConfig.whatsapp.message) =>
  `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Mather Square, ${address.street}, ${address.city} ${address.postalCode}`
)}`;

export const countriesServed = `${siteConfig.clientCountries.length}+`;
export const continentsServed = new Set(siteConfig.clientCountries.map((c) => c.continent)).size;

export const bookingHref = siteConfig.bookingUrl || siteConfig.routes.contact;

export const absoluteUrl = (path: string = "/") => new URL(path, siteConfig.siteUrl).toString();

export default siteConfig;

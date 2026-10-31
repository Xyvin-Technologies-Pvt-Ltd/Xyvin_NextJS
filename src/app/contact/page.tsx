import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import siteConfig, { mapsUrl, whatsappUrl } from "@/data/site_config";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to Xyvin Technologies about your software, web, mobile or AI project. Call, WhatsApp or send us a message and we'll reply within 24 hours.",
  path: "/contact",
});

const channels = [
  {
    icon: Phone,
    title: "Call us",
    lines: [siteConfig.phone.display, siteConfig.hours],
    action: "Call now",
    href: siteConfig.phone.href,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [siteConfig.phone.display, "Message us any time"],
    action: "Start a chat",
    href: whatsappUrl(),
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email, `We reply ${siteConfig.responseTime}`],
    action: "Send an email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: siteConfig.addressLines,
    action: "Get directions",
    href: mapsUrl,
  },
];

const quickLinks = [
  { title: "See our work", text: "Projects for GOEC, KSSIA, Khedmah and more", href: siteConfig.routes.work },
  { title: "Explore services", text: "Software, web, mobile, ERP and AI", href: siteConfig.routes.services },
  { title: "Read the blog", text: "Notes from our team", href: siteConfig.routes.blog },
  { title: "Meet the team", text: "Leadership and advisors", href: siteConfig.routes.about },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Contact" }]}
        title="Let's talk about your project"
        intro={`Tell us what you're working on. We'll reply ${siteConfig.responseTime} with questions, ideas and next steps. No obligation.`}
      />

      <Section aria-labelledby="channels-heading">
        <h2 id="channels-heading" className="sr-only">
          Ways to reach us
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, lines, action, href }) => {
            const external = href.startsWith("http");
            return (
              <li key={title} className="flex flex-col bg-white p-6 sm:p-8">
                <Icon size={22} aria-hidden="true" className="text-navy-900" />
                <h3 className="mt-4 text-lg">{title}</h3>
                <div className="mt-2 flex-1 text-[15px] text-muted">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <a
                  href={href}
                  data-track-location="contact_card"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {action}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="paper" id="form" aria-labelledby="form-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="form-heading"
              title="Start your project"
              intro="A few details help us come back with useful answers rather than more questions."
              className="mb-0 sm:mb-0"
            />
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="quick-heading">
        <h2 id="quick-heading" className="text-xl">
          Not ready to talk yet?
        </h2>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <li key={link.href} className="bg-white">
              <Link href={link.href} className="group flex h-full flex-col p-6 hover:bg-paper">
                <span className="font-display font-semibold">{link.title}</span>
                <span className="mt-1 text-[15px] text-muted">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

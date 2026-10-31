import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/img/Logo_white.png";
import siteConfig, { mapsUrl, whatsappUrl } from "@/data/site_config";
import services from "@/data/services";
import Container from "@/components/ui/Container";

const company = [
  { label: "About", href: siteConfig.routes.about },
  { label: "Our work", href: siteConfig.routes.work },
  { label: "Blog", href: siteConfig.routes.blog },
  { label: "Contact", href: siteConfig.routes.contact },
  { label: "Careers", href: `mailto:${siteConfig.careersEmail}?subject=Careers` },
];

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "Facebook", href: siteConfig.socials.facebook },
  { label: "X", href: siteConfig.socials.x },
];

const linkClass = "text-navy-200 hover:text-white";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src={logoWhite} alt={siteConfig.name} width={64} height={56} />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
            Software development partner for businesses worldwide. Web platforms, mobile apps, ERP systems and AI
            tools.
          </p>
          <address className="mt-6 text-[15px] not-italic leading-relaxed">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <span className="mt-2 block">Also in Dubai, UAE</span>
          </address>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${siteConfig.routes.services}/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            {company.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className={linkClass} data-track-location="footer">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.phone.href} className={linkClass} data-track-location="footer">
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass} data-track-location="footer">
                WhatsApp
              </a>
            </li>
            <li className="text-navy-300">{siteConfig.hours}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href={siteConfig.routes.privacy} className={linkClass}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href={siteConfig.routes.terms} className={linkClass}>
                Terms of service
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

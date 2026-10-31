import Link from "next/link";
import siteConfig from "@/data/site_config";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  const links = [
    { label: "Services", href: siteConfig.routes.services },
    { label: "Our work", href: siteConfig.routes.work },
    { label: "About", href: siteConfig.routes.about },
    { label: "Blog", href: siteConfig.routes.blog },
  ];
  return (
    <section className="pb-24 pt-40">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium text-muted">Error 404</p>
        <h1 className="mt-3 text-display-xl">We can&apos;t find that page</h1>
        <p className="mt-5 text-lg text-muted">
          It may have moved when we updated the site. Try one of these instead, or get in touch.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="font-semibold text-navy-900 underline underline-offset-4">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href={siteConfig.routes.contact} variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

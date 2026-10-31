"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/img/logo.svg";
import siteConfig, { bookingHref } from "@/data/site_config";
import ButtonLink from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Services", href: siteConfig.routes.services },
  { label: "Work", href: siteConfig.routes.work },
  { label: "About", href: siteConfig.routes.about },
  { label: "Blog", href: siteConfig.routes.blog },
  { label: "Contact", href: siteConfig.routes.contact },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white transition-colors",
        scrolled || open ? "border-line" : "border-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name}, home`}>
          <Image src={logo} alt="" width={52} height={52} priority />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    // Underline indicator: amber for the current page, faint navy on hover.
                    "relative py-2 text-[15px] font-medium transition-colors",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:rounded-full after:transition-transform after:duration-200",
                    isActive(item.href)
                      ? "text-navy-900 after:scale-x-100 after:bg-accent"
                      : "text-muted after:scale-x-0 after:bg-navy-900/25 hover:text-navy-900 hover:after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={bookingHref} track="booking" trackLocation="header" className="px-4 py-2.5">
            Book a call
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white md:hidden">
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "-ml-5 block border-l-4 py-4 pl-4 font-display text-2xl font-semibold sm:-ml-8 sm:pl-7",
                        isActive(item.href) ? "border-accent text-navy-900" : "border-transparent text-navy-700"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href={bookingHref} track="booking" trackLocation="mobile_menu">
                Book a free consultation
              </ButtonLink>
              <a href={siteConfig.phone.href} className="py-2 text-center text-muted">
                {siteConfig.phone.display}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

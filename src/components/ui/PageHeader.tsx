import Link from "next/link";
import Container from "./Container";

interface PageHeaderProps {
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
}

// Left-aligned page header used on inner pages.
export default function PageHeader({ title, intro, breadcrumb = [], children }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-paper pb-14 pt-32 sm:pb-20 sm:pt-40">
      <Container>
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-navy-900">
                  Home
                </Link>
              </li>
              {breadcrumb.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-navy-900">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-navy-900">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-display-xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </header>
  );
}

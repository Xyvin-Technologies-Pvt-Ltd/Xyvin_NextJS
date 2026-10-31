import Link from "next/link";
import { ArrowRight } from "lucide-react";
import services from "@/data/services";
import siteConfig from "@/data/site_config";

export default function ServiceList() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <li key={service.slug} className="bg-white">
          <Link
            href={`${siteConfig.routes.services}/${service.slug}`}
            className="group flex h-full flex-col p-6 hover:bg-paper sm:p-8"
          >
            <h3 className="text-xl">{service.title}</h3>
            <p className="mt-2 flex-1 text-[15px] text-muted">{service.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
              Learn more
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

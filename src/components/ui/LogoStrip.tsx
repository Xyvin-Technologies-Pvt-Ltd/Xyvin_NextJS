import Image from "next/image";
import clients from "@/data/clients";
import { cn } from "@/lib/cn";

// Static grid of client logos (no marquee), shown in greyscale so no single brand dominates.
export default function LogoStrip({ limit = 12, className }: { limit?: number; className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-6", className)}>
      {clients.slice(0, limit).map((client) => (
        <li key={client.name} className="flex h-24 items-center justify-center bg-white px-6">
          <Image
            src={client.logo}
            alt={client.name}
            className="max-h-10 w-auto max-w-full object-contain"
            sizes="160px"
          />
        </li>
      ))}
    </ul>
  );
}

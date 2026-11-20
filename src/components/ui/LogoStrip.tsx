import Image from "next/image";
import clients from "@/data/clients";
import { cn } from "@/lib/cn";

// Column layouts that leave no empty cell for the strip sizes we use: 14 logos as 2 x 7, 18 as 3 x 6.
const columnClasses = {
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  7: "grid-cols-2 lg:grid-cols-7",
};

// Static grid of client logos (no marquee), shown in greyscale so no single brand dominates.
export default function LogoStrip({
  limit = 14,
  columns = 7,
  className,
}: {
  limit?: number;
  columns?: 6 | 7;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-px overflow-hidden rounded-lg border border-line bg-line", columnClasses[columns], className)}>
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

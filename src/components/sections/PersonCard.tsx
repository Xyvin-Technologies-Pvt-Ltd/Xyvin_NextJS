import Image from "next/image";

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  company?: string;
  bio?: string;
  tags?: string[];
}

export default function PersonCard({ name, role, image, linkedin, company, bio, tags }: PersonCardProps) {
  return (
    <article>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-paper">
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top grayscale"
        />
      </div>
      <h3 className="mt-4 text-lg">{name}</h3>
      <p className="text-[15px] text-muted">
        {role}
        {company && `, ${company}`}
      </p>
      {bio && <p className="mt-3 text-[15px] text-navy-800">{bio}</p>}
      {tags && tags.length > 0 && <p className="mt-3 text-sm text-muted">{tags.join(" · ")}</p>}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
        >
          LinkedIn<span className="sr-only"> profile of {name}</span>
        </a>
      )}
    </article>
  );
}

import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-lg border border-line bg-white p-8">
      <blockquote className="text-lg leading-relaxed text-navy-800">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-8 border-t border-line pt-5">
        <p className="font-semibold text-navy-900">{testimonial.name}</p>
        <p className="text-sm text-muted">
          {testimonial.role}, {testimonial.company}
          {testimonial.isAdvisor && <span className="block">Also an advisor to Xyvin</span>}
        </p>
      </figcaption>
    </figure>
  );
}

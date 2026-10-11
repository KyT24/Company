import type { Testimonial } from "../types";

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  return (
    <figure className="card">
      <blockquote className="text-silver-light">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-silver-dark">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
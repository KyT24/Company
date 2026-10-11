import type { ReactElement } from "react";
import type { Service } from "../types";

type Props = {
  service: Service;
  detailed: boolean;
};

function ServiceCard({ service, detailed }: Props) {
  let extra: ReactElement | null = null;

  if (detailed === true) {
    extra = (
      <div className="mt-4 border-t border-navy-700 pt-4">
        <p className="text-sm italic text-silver">
          &ldquo;{service.quote}&rdquo;
        </p>
        <p className="mt-1 text-xs text-silver-dark">- {service.quoteBy}</p>
      </div>
    );
  }

  return (
    <article className="card transition hover:border-neon-light">
      <p className="text-4xl" aria-hidden="true">
        {service.icon}
      </p>
      <h3 className="mt-3 text-xl text-white">{service.title}</h3>
      <p className="mt-2 text-silver">{service.description}</p>
      <p className="mt-4 font-semibold text-neon-light">{service.price}</p>
      {extra}
    </article>
  );
}

export default ServiceCard;
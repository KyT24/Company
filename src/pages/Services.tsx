import type { ReactElement } from "react";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

function Services() {
  const serviceItems: ReactElement[] = [];
  for (let i = 0; i < services.length; i++) {
    serviceItems.push(
      <ServiceCard
        key={services[i].title}
        service={services[i]}
        detailed={true}
      />
    );
  }

  return (
    <div className="page-wrap">
      <h1 className="sr-only">Services</h1>
      <SectionTitle
        title="Our Services"
        subtitle="Prices, details and what customers say about each one."
      />
      <div className="grid gap-6 md:grid-cols-2">{serviceItems}</div>
    </div>
  );
}

export default Services;
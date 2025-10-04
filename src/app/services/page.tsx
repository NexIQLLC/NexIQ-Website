import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | NexIQ",
  description: "Explore our comprehensive IT solutions including HRIS & CRM Integration, API Development, Automation, Web Apps, and AI Solutions.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}


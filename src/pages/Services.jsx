import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const services = [
  ["01", "Residential Construction", "Custom homes, villas and apartments developed with disciplined planning, quality materials and detailed execution."],
  ["02", "Commercial Construction", "Modern commercial spaces designed and executed around functionality, durability and professional requirements."],
  ["03", "Turnkey Projects", "A coordinated approach covering planning, design development, execution and final handover."],
  ["04", "Renovation & Remodeling", "Transforming existing spaces through upgrades, contemporary design and refined detailing."],
  ["05", "Interior Execution", "Interior construction and finishing works coordinated around the project's design requirements."],
  ["06", "Project Coordination", "Organized coordination between design, materials, site activities and execution."],
];

function Services() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">COMPLETE CONSTRUCTION SOLUTIONS</h2>
        <p className="mx-auto mt-4 max-w-4xl text-center font-play text-[12px] text-gray-300 sm:text-base">
          We bring together construction, execution and project coordination to provide a structured path from initial idea to completed space.
        </p>
        <div className="mx-auto mt-10 max-w-5xl border-t border-white/10">
          {services.map(([number, title, description]) => (
            <article key={number} className="grid gap-2 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] sm:items-start">
              <span className="font-conthrax text-sm text-[#caa193]">{number}</span>
              <div>
                <h3 className="font-conthrax text-base uppercase tracking-wide sm:text-lg">{title}</h3>
                <p className="mt-2 max-w-3xl font-play text-[11px] leading-relaxed text-gray-400 sm:text-sm">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="border border-[#caa193]/70 px-8 py-2.5 font-conthrax text-[9px] uppercase tracking-wide text-[#caa193] hover:bg-[#caa193] hover:text-black"
          >
            SEND YOUR ENQUIRY
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Services;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";
import BuildJourneyExperience from "../components/BuildJourneyExperience";

const heroSlides = [
  { image: "/hero4.png", caption: "BUILDING LEGACIES IN BENGALURU" },
  { image: "/hero3.png", caption: "FROM FIRST SKETCH TO FINAL HANDOVER" },
  { image: "/hero2.png", caption: "RESIDENTIAL AND COMMERCIAL CONSTRUCTION" },
  { image: "/hero1.png", caption: "SPACES BUILT WITH PURPOSE" },
];

const reasons = [
  ["ONE TEAM, END TO END", "Design, construction and coordination sit with one team, so drawings and site work stay aligned."],
  ["QUALITY AT EVERY STAGE", "Materials, structure and finishing are checked as the project moves, not only at the end."],
  ["CLEAR COMMUNICATION", "You stay informed about decisions, progress and what comes next on site."],
  ["DETAILS THAT LAST", "Practical planning and careful execution create spaces made for everyday life."],
];

const specialisations = [
  ["RESIDENTIAL CONSTRUCTION", "Custom homes, villas and apartments planned around how you live."],
  ["COMMERCIAL CONSTRUCTION", "Offices, retail and workspaces built for performance and brand."],
  ["TURNKEY PROJECTS", "One coordinated path from concept and approvals through handover."],
  ["VILLA CONSTRUCTION", "Ground-up villas with structure, services and finishes considered together."],
  ["APARTMENT BUILDINGS", "Multi-unit residential work with disciplined planning and quality control."],
  ["RENOVATION", "Structural upgrades, new layouts and refined finishes for existing spaces."],
  ["INTERIOR EXECUTION", "Interior construction coordinated with the architectural intent."],
  ["PROJECT COORDINATION", "Materials, trades and timelines managed from one plan."],
  ["STRUCTURAL WORKS", "Foundations, frames and core construction handled with precision."],
  ["FINISHING", "Fixtures, joinery-adjacent detailing and final quality before handover."],
];

const projects = [
  { tag: "VILLA", title: "CONTEMPORARY VILLA", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85" },
  { tag: "COMMERCIAL", title: "CORPORATE OFFICE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" },
  { tag: "RESIDENTIAL", title: "MODERN RESIDENCE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" },
  { tag: "ARCHITECTURE", title: "LUXURY EXTERIOR", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" },
];

const buildServices = [
  ["DESIGN & BUILD", "One contract for planning, construction and finishing, with a single point of contact."],
  ["BUILDING CONSTRUCTION", "Residential and commercial construction delivered with disciplined site control."],
  ["INTERIORS", "Interior execution coordinated with the architecture rather than added at the end."],
  ["RENOVATION", "Existing buildings upgraded through structure, layout and refined finishes."],
];

const processSteps = [
  "Consultation",
  "Concept & Design",
  "Planning",
  "Approvals",
  "Construction",
  "Finishing",
  "Handover",
];

const areas = [
  ["ALL OVER BANGALORE", "Homes and commercial spaces across East Bengaluru."],
  ["BANGALORE RURAL", "Residential and boutique commercial construction."],
  ["NEAR BY BANGALORE DIST", "Workspaces and residential projects in the south corridor."],
  ["KANAKAPURA", "Refined residential upgrades and new builds."],
];

const faqs = [
  ["What types of projects do you take on?", "We work on residential and commercial construction, turnkey projects, interiors and renovation. Share a little about your project and we can discuss the right scope."],
  ["Can you help from design through construction?", "Yes. Our team can coordinate design development, planning and construction through to finishing and handover."],
  ["How do I get an estimate?", "Contact us with your location, project type, approximate size and any drawings you have. We will discuss the scope and the next steps for a considered estimate."],
  ["How will I know what is happening on site?", "We keep communication clear through the project, including progress updates and coordination around key decisions."],
];

function Home() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative h-[300px] overflow-hidden bg-black sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {heroSlides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={item.image} alt="" className="hero-bg-img h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        <div className="absolute inset-x-0 bottom-5 z-20 px-4 text-center text-white sm:bottom-7 md:bottom-10">
          <p className="font-penrise text-xl tracking-wide sm:text-2xl md:text-3xl lg:text-4xl">Arun Building Constructions</p>
          <h1 className="mt-2 font-play text-sm tracking-wider sm:text-lg md:text-2xl lg:text-3xl">
            Construction in Bengaluru, From First Sketch to Final Handover
          </h1>
        </div>
      </section>

      <BuildJourneyExperience />

      <section className="relative overflow-hidden bg-transparent text-white">
        <div className="relative z-[1] mx-auto max-w-6xl px-4 pt-6 text-justify font-play text-[12px] text-gray-300 sm:px-6 sm:text-base md:px-12 lg:px-20">
          <p>
            Good construction should look the same on handover day as it did in the drawings. At Arun Building Constructions, the people who plan your space work alongside the teams who build it, so nothing gets lost between the drawing and the site. We deliver residential and commercial spaces across Bengaluru through thoughtful planning, quality workmanship and dependable execution.
          </p>
        </div>

        <div className="relative z-[1] mx-auto mt-6 max-w-7xl px-4 sm:px-6 md:mt-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 border-y border-white/10 md:grid-cols-5">
            {[
              ["PLAN", "FIRST"],
              ["BUILD", "WITH CARE"],
              ["QUALITY", "CONTROL"],
              ["CLEAR", "UPDATES"],
              ["ON-TIME", "HANDOVER"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={`flex flex-col items-center justify-center px-3 py-5 text-center md:py-7 ${index < 4 ? "border-b border-white/10 md:border-b-0 md:border-r" : "border-white/10 md:border-0"}`}
              >
                <span className="font-conthrax text-sm tracking-wide text-[#caa193] sm:text-base md:text-lg">{value}</span>
                <span className="mt-1.5 text-[8px] uppercase tracking-widest text-white/70 sm:text-[9px] md:text-[10px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent px-4 py-8 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-4" />
        <div className="relative z-[1] text-center">
          <h2 className="py-2 font-conthrax text-[12px] tracking-widest sm:text-xl md:py-5">
            WHY CHOOSE ARUN BUILDING CONSTRUCTIONS?
          </h2>
          <p className="mx-auto max-w-6xl py-2 text-justify font-play text-[12px] text-gray-300 sm:text-base md:py-6">
            When a project slips past its budget or its handover date, the cause is usually the gap between the drawing and the contractor who built it. We work to close that gap. Planning, construction and finishing sit with one team, so there is never a question about who owns the result.
          </p>
        </div>
        <div className="relative z-[1] mt-10 mb-6 grid grid-cols-1 gap-10 text-sm sm:text-base md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([title, text]) => (
            <article key={title} className="space-y-3 px-2 text-start">
              <h3 className="font-conthrax text-[12px] uppercase tracking-wide text-[#caa193]">{title}</h3>
              <p className="text-left font-play text-[10px] leading-relaxed text-white sm:text-sm">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black/25 px-4 py-10 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">CONSTRUCTION SERVICES IN BENGALURU</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center font-play text-[12px] text-gray-300 sm:text-base">
          Specialisations led by the same team that will be on site.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {specialisations.map(([title, text]) => (
            <Link to="/services" key={title} className="group">
              <h3 className="font-conthrax text-[11px] uppercase tracking-wide text-[#caa193] group-hover:text-[#d5a99b]">{title}</h3>
              <p className="mt-2 font-play text-[10px] leading-relaxed text-gray-300 sm:text-xs">{text}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link to="/services" className="font-play text-sm text-[#caa193] hover:underline">
            See all construction services →
          </Link>
        </p>
      </section>

      <section className="relative overflow-hidden bg-transparent px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-7 bg-[#caa193]" />
            <p className="font-conthrax text-[8px] uppercase tracking-[0.22em] text-[#caa193] sm:text-[9px]">SELECTED PROJECTS</p>
          </div>
          <h2 className="mt-6 font-conthrax text-[12px] tracking-widest sm:text-xl md:mt-10">RECENT CONSTRUCTION PROJECTS IN BENGALURU</h2>
          <p className="mt-2 font-play text-[10px] leading-relaxed text-gray-300 sm:text-xs">
            A selection of residential, commercial and architectural work.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {projects.map((project) => (
              <Link to="/projects" key={project.title} className="group relative block h-[280px] overflow-hidden sm:h-[360px]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-conthrax text-[8px] tracking-[0.2em] text-[#caa193]">{project.tag}</span>
                  <h3 className="mt-1 font-conthrax text-lg text-white sm:text-xl">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-2 font-play text-[10px] text-white/70">
                    <span className="h-1 w-1 rounded-full bg-[#caa193]" />
                    <span>{project.meta}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              to="/contact"
              className="border border-[#caa193]/70 px-6 py-2.5 font-conthrax text-[8px] uppercase tracking-wide text-[#caa193] transition-all duration-300 hover:bg-[#caa193] hover:text-black sm:px-10 sm:text-[9px]"
            >
              SEND YOUR ENQUIRY
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black/25 px-4 py-10 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">Design, Build and Construction in Bengaluru</h2>
        <p className="mx-auto mt-3 max-w-6xl text-center font-play text-[12px] text-gray-300 sm:text-base">
          Design is only half the job. Our crews turn approved drawings into finished spaces: structure, finishes and detailing, coordinated from one plan. That makes us a planner and a builder in one, so what you approve is what you get on handover day.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {buildServices.map(([title, text]) => (
            <article key={title} className="border border-white/10 p-6">
              <h3 className="font-conthrax text-[12px] uppercase tracking-wide text-[#caa193]">{title}</h3>
              <p className="mt-3 font-play text-[10px] leading-relaxed text-gray-300 sm:text-sm">{text}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-14 mb-5 text-center font-conthrax text-[12px] tracking-widest sm:text-xl">Our Process</h2>
        <div className="hidden w-full items-stretch border-y border-white/10 lg:flex">
          {processSteps.map((step, index) => (
            <div key={step} className={`relative flex min-h-[90px] flex-1 flex-col items-center justify-center px-3 text-center ${index < processSteps.length - 1 ? "border-r border-white/10" : ""}`}>
              <span className="mb-2 font-conthrax text-[9px] tracking-wider text-[#caa193]">0{index + 1}</span>
              <span className="font-conthrax text-[9px] uppercase leading-relaxed tracking-[0.08em] text-white/80 xl:text-[10px]">{step}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 border-y border-white/10 lg:hidden">
          {processSteps.map((step, index) => (
            <div key={step} className="flex min-h-[80px] flex-col items-center justify-center border-b border-r border-white/10 px-2 text-center">
              <span className="mb-1 font-conthrax text-[9px] text-[#caa193]">0{index + 1}</span>
              <span className="font-conthrax text-[8px] uppercase tracking-wide text-white/80">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">Areas We Serve</h2>
        <p className="mx-auto mt-4 max-w-4xl text-center font-play text-[12px] text-gray-300 sm:text-base">
          Our base in Bengaluru keeps Whitefield, Indiranagar, Electronic City, Koramangala and neighbouring communities within easy reach.
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(([title, text]) => (
            <article key={title}>
              <h3 className="font-conthrax text-[11px] uppercase tracking-wide text-[#caa193]">{title}</h3>
              <p className="mt-2 font-play text-xs text-gray-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black/25 px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">CONSTRUCTION QUESTIONS, ANSWERED</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center font-play text-[12px] text-gray-300 sm:text-sm">
          Straight answers about construction, turnkey delivery and working with our team in Bengaluru.
        </p>
        <div className="mx-auto mt-8 max-w-5xl border-t border-white/10">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="border-b border-white/10">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-play text-sm"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span className="flex items-center gap-3">
                  <span className="font-conthrax text-[10px] text-[#caa193]">0{index + 1}</span>
                  {question}
                </span>
                <span className="text-[#caa193]">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <p className="max-w-4xl pb-5 pl-8 pr-8 font-play text-[10px] leading-[1.8] text-gray-400 sm:pl-9 sm:text-[11px]">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-4" />
        <h2 className="mb-6 text-center font-conthrax text-sm tracking-widest sm:text-xl">CONTACT US</h2>
        <form
          className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nSubject: ${data.get("subject")}\n\n${data.get("message")}`
            );
            window.location.href = `mailto:info@arunbuildingconstructions.com?subject=${encodeURIComponent(data.get("subject") || "Project enquiry")}&body=${body}`;
          }}
        >
          <div className="space-y-6 px-4">
            {[
              ["name", "Your Name (required)", "text", "Your name"],
              ["email", "Your Email (required)", "email", "you@example.com"],
              ["phone", "Mobile Number", "tel", "99XXXXXXX"],
              ["subject", "Subject (required)", "text", "Construction enquiry"],
            ].map(([name, label, type, placeholder]) => (
              <div key={name}>
                <label className="mb-1 block text-sm" htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  required={name !== "phone"}
                  placeholder={placeholder}
                  className="w-full border border-[#a16848] bg-transparent px-4 py-2 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex h-full flex-col justify-between space-y-4 px-4">
            <div>
              <label className="mb-1 block text-sm" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                className="w-full border border-[#a16848] bg-transparent px-4 py-2 focus:outline-none"
                placeholder="Tell us about the project"
              />
            </div>
            <button
              type="submit"
              className="self-end border border-[#caa193] bg-[#caa193] px-8 py-2.5 font-conthrax text-[9px] uppercase tracking-wide text-black transition hover:bg-transparent hover:text-[#caa193]"
            >
              SEND EMAIL
            </button>
          </div>
        </form>
      </section>

      <CtaBand />
    </>
  );
}

export default Home;

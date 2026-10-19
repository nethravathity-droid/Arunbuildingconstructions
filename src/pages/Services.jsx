
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  House,
  Layers3,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    subtitle: "Homes designed around your lifestyle",
    description:
      "From independent houses and contemporary villas to residential buildings, we focus on transforming your requirements into practical, well-planned living spaces. Every project is approached with attention to layout, structural requirements, material selection and finishing details.",
    features: [
      "Independent houses and custom homes",
      "Villa and residential building construction",
      "Layout and space planning coordination",
      "Construction execution and finishing",
    ],
    icon: House,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Commercial Construction",
    subtitle: "Spaces built for business",
    description:
      "We approach commercial construction with an emphasis on functional layouts, durability and project-specific requirements. From office spaces to other commercial environments, the focus is on creating spaces that support day-to-day operations and reflect the intended business identity.",
    features: [
      "Office and commercial spaces",
      "Functional space planning",
      "Coordination of construction activities",
      "Finishing aligned with project specifications",
    ],
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    subtitle: "A coordinated project journey",
    description:
      "Turnkey projects bring the agreed project requirements together through a coordinated approach to planning, execution and finishing. Depending on the agreed scope, we help manage the different stages so that decisions, work activities and handover requirements remain aligned.",
    features: [
      "Project scope and requirement coordination",
      "Design and execution coordination",
      "Material and work-stage planning",
      "Finishing and agreed handover activities",
    ],
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Renovation & Remodeling",
    subtitle: "Giving existing spaces a new direction",
    description:
      "Renovation and remodeling can improve the appearance, functionality and usability of an existing space. We work around the agreed requirements, existing site conditions and desired finish to plan appropriate upgrades and coordinate the required work.",
    features: [
      "Residential renovation and upgrades",
      "Interior space improvements",
      "Finishing and material updates",
      "Remodeling based on site conditions",
    ],
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Interior Execution",
    subtitle: "Finishing touches that complete a space",
    description:
      "Interior execution focuses on bringing the approved interior design and finishing requirements into the built environment. Work is coordinated according to the agreed scope, with attention to material finishes, fittings, visual consistency and practical use.",
    features: [
      "Interior finishing and detailing",
      "Flooring and painting coordination",
      "Fixtures and fittings installation coordination",
      "Execution aligned with approved designs",
    ],
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Project Coordination",
    subtitle: "Planning every stage with clarity",
    description:
      "Effective coordination helps construction activities progress in an organised manner. We focus on aligning the agreed scope, work sequence, material requirements, site activities and project milestones to support smoother execution.",
    features: [
      "Work-stage and schedule coordination",
      "Material requirement planning",
      "Site activity coordination",
      "Progress reviews and completion checks",
    ],
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  {
    icon: Ruler,
    title: "PLANNED EXECUTION",
    description:
      "A structured approach to project scope, requirements and work stages.",
  },
  {
    icon: ShieldCheck,
    title: "QUALITY FOCUS",
    description:
      "Attention to workmanship, specified materials and finishing details.",
  },
  {
    icon: HardHat,
    title: "SITE COORDINATION",
    description:
      "Coordination of relevant activities throughout the agreed project scope.",
  },
  {
    icon: DraftingCompass,
    title: "DESIGN ALIGNMENT",
    description:
      "Execution guided by approved designs and project-specific requirements.",
  },
];

const workStages = [
  {
    number: "01",
    title: "DISCUSS",
    description:
      "Share your project idea, requirements, site details and expectations.",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "Review the project scope, design direction, estimate and work schedule.",
  },
  {
    number: "03",
    title: "EXECUTE",
    description:
      "Coordinate the agreed construction activities and project milestones.",
  },
  {
    number: "04",
    title: "COMPLETE",
    description:
      "Review finishing details and coordinate the agreed project handover.",
  },
];

function Services() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="OUR SERVICES"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#caa193]/5 blur-3xl" />

        <SectionOrnament className="mb-6" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193] sm:text-xs">
            WHAT WE DO
          </p>

          <h2 className="mt-4 font-conthrax text-xl leading-relaxed sm:text-2xl lg:text-3xl">
            COMPLETE CONSTRUCTION
            <span className="mt-2 block text-[#caa193]">
              SOLUTIONS
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-play text-sm leading-8 text-gray-300 sm:text-base">
            Arun Building Constructions brings together construction,
            renovation, interior execution and project coordination to support
            your building journey. Our approach begins with understanding your
            requirements and continues through planning, execution, finishing
            and the agreed handover.
          </p>

          <p className="mx-auto mt-3 max-w-3xl font-play text-sm leading-8 text-gray-400">
            Whether you are planning a new home, a commercial property or an
            upgrade to an existing space, our services can be discussed and
            tailored to the agreed scope and site requirements.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#caa193]/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193]">
                OUR EXPERTISE
              </p>

              <h2 className="mt-4 font-conthrax text-lg leading-relaxed sm:text-2xl">
                SERVICES FOR EVERY
                <span className="text-[#caa193]"> BUILDING NEED</span>
              </h2>
            </div>

            <p className="max-w-md font-play text-xs leading-7 text-gray-400 sm:text-sm">
              Explore our services and find the right starting point for your
              next project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-[#caa193]/50 hover:bg-white/[0.04]"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} inspiration`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

                    <span className="absolute left-5 top-5 font-conthrax text-xs tracking-widest text-[#caa193]">
                      {service.number}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center border border-[#caa193]/60 bg-black/60 text-[#caa193] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#caa193] group-hover:text-black">
                      <Icon size={22} strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="font-play text-[10px] uppercase tracking-[0.15em] text-[#caa193]">
                      {service.subtitle}
                    </p>

                    <h3 className="mt-3 font-conthrax text-sm leading-7 sm:text-base">
                      {service.title}
                    </h3>

                    <p className="mt-4 font-play text-xs leading-7 text-gray-400 sm:text-sm">
                      {service.description}
                    </p>

                    <div className="my-5 h-px bg-white/10" />

                    <p className="mb-4 font-conthrax text-[9px] tracking-widest text-white/80">
                      SERVICE HIGHLIGHTS
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 font-play text-xs leading-6 text-gray-300"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-1 shrink-0 text-[#caa193]"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-3 border-b border-[#caa193]/40 pb-2 font-conthrax text-[9px] tracking-widest text-[#caa193] transition-colors hover:border-[#caa193] hover:text-white"
                      >
                        ENQUIRE ABOUT THIS SERVICE
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR APPROACH */}
      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">
        <SectionOrnament className="mb-6" />

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193]">
              OUR COMMITMENT
            </p>

            <h2 className="mt-4 font-conthrax text-xl leading-relaxed sm:text-2xl">
              A THOUGHTFUL
              <span className="block text-[#caa193]">
                APPROACH TO EVERY PROJECT
              </span>
            </h2>

            <p className="mt-6 font-play text-sm leading-8 text-gray-300">
              Every project has its own goals, site conditions and practical
              requirements. We believe that clear planning, coordination and
              attention to detail are essential to bringing the agreed vision
              to life.
            </p>

            <p className="mt-4 font-play text-sm leading-8 text-gray-400">
              Our working approach is guided by the project scope,
              specifications, site conditions and agreed schedule.
            </p>

            <Link
              to="/process"
              className="mt-8 inline-flex items-center gap-3 border border-[#caa193]/70 px-6 py-3 font-conthrax text-[9px] tracking-widest text-[#caa193] transition-all duration-300 hover:bg-[#caa193] hover:text-black"
            >
              EXPLORE OUR PROCESS
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#caa193]/50"
                >
                  <span className="font-conthrax text-xs text-[#caa193]/60">
                    0{index + 1}
                  </span>

                  <div className="my-5 flex h-12 w-12 items-center justify-center border border-[#caa193]/30 text-[#caa193]">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>

                  <h3 className="font-conthrax text-[10px] leading-6 tracking-wide">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 font-play text-xs leading-7 text-gray-400">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative overflow-hidden bg-[#10100f] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#caa193 1px, transparent 1px), linear-gradient(90deg, #caa193 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193]">
              FROM START TO FINISH
            </p>

            <h2 className="mt-4 font-conthrax text-lg leading-relaxed sm:text-2xl">
              HOW YOUR PROJECT
              <span className="text-[#caa193]"> TAKES SHAPE</span>
            </h2>

            <p className="mt-5 font-play text-sm leading-8 text-gray-400">
              A straightforward project journey helps keep requirements,
              decisions and execution aligned at every stage.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workStages.map((stage, index) => (
              <article
                key={stage.number}
                className="relative border border-white/10 bg-black/30 p-6 transition-colors duration-300 hover:border-[#caa193]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-conthrax text-2xl text-[#caa193]">
                    {stage.number}
                  </span>

                  {index < workStages.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="hidden text-[#caa193]/50 lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-6 font-conthrax text-xs tracking-widest">
                  {stage.title}
                </h3>

                <p className="mt-3 font-play text-xs leading-7 text-gray-400">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY */}
      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <SectionOrnament className="mb-6" />

          <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193]">
            LET'S DISCUSS YOUR PLANS
          </p>

          <h2 className="mt-4 font-conthrax text-xl leading-relaxed sm:text-2xl lg:text-3xl">
            READY TO BUILD
            <span className="mt-2 block text-[#caa193]">
              SOMETHING MEANINGFUL?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl font-play text-sm leading-8 text-gray-400">
            Tell us about your construction, renovation or commercial project.
            We can discuss your requirements, project scope and the next steps.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-4 border border-[#caa193]/70 px-7 py-4 font-conthrax text-[9px] tracking-widest text-[#caa193] transition-all duration-300 hover:bg-[#caa193] hover:text-black sm:px-9"
          >
            SEND YOUR ENQUIRY
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Services;

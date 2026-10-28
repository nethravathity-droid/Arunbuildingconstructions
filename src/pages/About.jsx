import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  DraftingCompass,
  HardHat,
  House,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const values = [
  {
    number: "01",
    title: "RESIDENTIAL",
    text: "Homes, villas and apartments planned around your lifestyle, comfort and long-term needs.",
    icon: House,
  },
  {
    number: "02",
    title: "COMMERCIAL",
    text: "Functional offices, retail spaces and commercial environments designed for everyday performance.",
    icon: Building2,
  },
  {
    number: "03",
    title: "TURNKEY",
    text: "A coordinated approach to design, construction and finishing, with a single team guiding the process.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "RENOVATION",
    text: "Existing properties transformed through thoughtful layouts, improved functionality and refined finishes.",
    icon: Ruler,
  },
];

const principles = [
  {
    number: "01",
    title: "QUALITY IN EVERY DETAIL",
    text: "We value careful workmanship, suitable materials and attention to the details that shape the finished space.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "PLANNING WITH PURPOSE",
    text: "Clear requirements, considered planning and coordinated execution help keep projects organised.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "TRANSPARENT COMMUNICATION",
    text: "We believe clients should understand the project scope, decisions and progress throughout the construction journey.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "BUILT AROUND PEOPLE",
    text: "Every property serves a purpose. We focus on creating spaces that support the people who use them every day.",
    icon: Sparkles,
  },
];

const leaders = [
  {
    name: "Vasanth Kumar R",
    role: "Chairman",
    image: "/chairman.jpeg",
    align: "left",
    description:
      "Providing strategic direction and guiding the vision of Arun Building Constructions.",
    details: [
      "Guides the company's vision, values and long-term direction, with a focus on responsible construction and lasting client relationships.",
      "Emphasises quality, integrity and thoughtful decision-making throughout the building journey.",
      "Works to establish a consistent standard for project planning, construction practices and client experience.",
    ],
  },
  {
    name: "Arun Kumar V",
    role: "Managing Director",
    image: "/MD.jpeg",
    align: "right",
    description:
      "Coordinating project execution, operations and the delivery of considered building solutions.",
    details: [
      "Oversees day-to-day operations, project execution and coordination with clients and project teams.",
      "Brings design intent, construction activities and site coordination together to support consistent execution.",
      "Focuses on communication, practical problem-solving and delivering spaces that respond to client requirements.",
    ],
  },
];

function LeaderPortrait({ name, image, role }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="group relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden border border-[#caa193]/30 bg-[#171310]">
      {!missing ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setMissing(true)}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="font-conthrax text-[10px] tracking-[0.22em] text-[#caa193]">
            LEADERSHIP
          </span>
          <span className="font-penrise text-2xl text-white/40">
            {name}
          </span>
          <span className="font-play text-xs text-white/40">
            Add photograph: {image}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <span className="font-conthrax text-[9px] uppercase tracking-[0.22em] text-[#dfb8a8]">
          {role}
        </span>
        <h3 className="mt-2 font-penrise text-xl tracking-wide text-white sm:text-1xl">
          {name}
        </h3>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-[#caa193]/80" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#caa193]/80" />
    </figure>
  );
}

function About() {
  return (
    <>
      {/* HERO */}


      {/* COMPANY INTRODUCTION */}


      {/* LEADERSHIP */}
      <section className="relative overflow-hidden bg-black/20 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionOrnament className="mb-6" />

          <p className="text-center font-conthrax text-[10px] tracking-[0.28em] text-[#caa193]">
            LEADERSHIP
          </p>

          <h2 className="mt-4 text-center font-conthrax text-sm tracking-[0.12em] text-[#f6ede5] sm:text-xl">
            THE PEOPLE BEHIND THE WORK
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center font-play text-xs leading-7 text-gray-400 sm:text-sm">
            Leadership built around vision, responsibility and
            a commitment to delivering considered construction
            solutions.
          </p>

          <div className="mt-10 space-y-16 lg:mt-20 lg:space-y-10">
            {leaders.map((leader) => (
              <article
                key={leader.role}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={
                    leader.align === "right"
                      ? "lg:order-2"
                      : ""
                  }
                >
                  <LeaderPortrait
                    name={leader.name}
                    image={leader.image}
                    role={leader.role}
                  />
                </div>

                <div
                  className={
                    leader.align === "right"
                      ? "lg:order-1"
                      : ""
                  }
                >
                  <p className="font-conthrax text-[10px] tracking-[0.22em] text-[#caa193]">
                    {leader.role}
                  </p>

                  <h3 className="mt-3 font-penrise text-1xl tracking-wide text-[#f6ede5] sm:text-2xl lg:text-2.8xl">
                    {leader.name}
                  </h3>

                  <p className="mt-5 font-play text-sm leading-7 text-[#dfb8a8]">
                    {leader.description}
                  </p>

                  <div className="mt-6 space-y-4 font-play text-[13px] leading-[1.9] text-gray-300 sm:text-sm">
                    {leader.details.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="border-l border-white/10 pl-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionOrnament className="mb-6" />

          <p className="text-center font-conthrax text-[10px] tracking-[0.28em] text-[#caa193]">
            THE WAY WE WORK
          </p>

          <h2 className="mt-4 text-center font-conthrax text-sm tracking-[0.12em] sm:text-xl">
            PRINCIPLES THAT GUIDE US
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center font-play text-xs leading-7 text-gray-400 sm:text-sm">
            A considered approach to planning, communication,
            workmanship and the experience of building.
          </p>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative bg-[#100f0e] p-6 transition-colors duration-300 hover:bg-[#1b1714] sm:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon
                      size={25}
                      strokeWidth={1.2}
                      className="text-[#caa193] transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="font-conthrax text-[10px] tracking-widest text-white/30">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-conthrax text-[11px] tracking-[0.12em] text-[#f6ede5] sm:text-xs">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md font-play text-xs leading-7 text-gray-400 sm:text-sm">
                    {item.text}
                  </p>

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#caa193] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative overflow-hidden bg-black/25 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionOrnament className="mb-6" />

          <p className="text-center font-conthrax text-[10px] tracking-[0.28em] text-[#caa193]">
            OUR EXPERTISE
          </p>

          <h2 className="mt-4 text-center font-conthrax text-sm tracking-[0.12em] sm:text-xl">
            WHAT WE DO
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center font-play text-xs leading-7 text-gray-400 sm:text-sm">
            Building solutions shaped around different properties,
            requirements and project goals.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative flex min-h-[240px] flex-col border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#caa193]/50 hover:bg-[#caa193]/[0.04] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={27}
                      strokeWidth={1.2}
                      className="text-[#caa193]"
                    />

                    <span className="font-conthrax text-[10px] text-white/30">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-conthrax text-[11px] uppercase tracking-[0.1em] text-[#caa193]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 font-play text-xs leading-7 text-gray-400 sm:text-sm">
                    {item.text}
                  </p>

                  <Link
                    to="/services"
                    aria-label={`Explore ${item.title.toLowerCase()} services`}
                    className="mt-5 inline-flex w-fit items-center gap-2 font-conthrax text-[9px] uppercase tracking-wider text-white/70 transition-colors hover:text-[#caa193]"
                  >
                    Discover More
                    <ArrowRight size={13} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center justify-center gap-3 border border-[#caa193]/70 px-7 py-3 font-conthrax text-[9px] uppercase tracking-[0.12em] text-[#caa193] transition-all duration-300 hover:bg-[#caa193] hover:text-black sm:px-9"
            >
              Explore Our Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-transparent px-5 py-13 text-white sm:px-8 sm:py-15 lg:px-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#caa193]/[0.04] blur-3xl"
        />

        <div className="relative z-[1] mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionOrnament className="mb-6" />

            <p className="font-conthrax text-[10px] tracking-[0.25em] text-[#caa193]">
              WHO WE ARE
            </p>

            <h2 className="mt-5 font-penrise text-4xl leading-tight text-[#f6ede5] sm:text-2xl lg:text-4xl">
              Building Spaces.
              <span className="mt-2 block text-[#caa193]">
                Shaping Living.
              </span>
            </h2>

            <p className="mt-6 max-w-md font-play text-sm leading-8 text-gray-400">
              Thoughtful planning, coordinated construction and
              attention to the details that make a building feel
              complete.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#caa193]/60 pb-3 font-conthrax text-[10px] uppercase tracking-[0.16em] text-[#caa193] transition-colors hover:text-white"
            >
              Explore Our Projects
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-5 font-play text-[13px] leading-[2] text-gray-300 sm:text-sm">
            <p>
              Arun Building Constructions delivers residential and
              commercial spaces through disciplined planning,
              quality workmanship and coordinated execution. Every
              project begins with understanding the client's
              requirements, priorities and vision for the space.
            </p>

            <p>
              From initial planning and structural development to
              finishing and handover, our approach brings the
              different stages of construction together with a focus
              on functionality, detail and practical decision-making.
            </p>

            <p>
              We understand that a building is more than its
              structure. It is a home, a workplace or a place where
              people build their future. That understanding shapes
              the way we approach every project across Bengaluru.
            </p>

            <div className="border-l border-[#caa193]/60 py-2 pl-5">
              <p className="font-penrise text-xl italic leading-relaxed text-[#dfb8a8] sm:text-1xl">
                "Every space begins with an idea. Thoughtful
                construction brings it to life."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CONSTRUCTION JOURNEY */}
      <section className="relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="font-conthrax text-[10px] tracking-[0.25em] text-[#caa193]">
              YOUR VISION, OUR APPROACH
            </p>

            <h2 className="mt-4 max-w-2xl font-penrise text-3xl leading-tight text-[#f6ede5] sm:text-4xl lg:text-5xl">
              From the first plan to the final detail.
            </h2>

            <p className="mt-5 max-w-2xl font-play text-xs leading-7 text-gray-400 sm:text-sm">
              Discover how planning, construction and finishing
              come together throughout the building process.
            </p>
          </div>

          <Link
            to="/process"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#caa193]/70 px-7 py-3 font-conthrax text-[9px] uppercase tracking-[0.12em] text-[#caa193] transition-colors hover:bg-[#caa193] hover:text-black"
          >
            View Our Process
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBand />
    </>
  );
}

export default About;

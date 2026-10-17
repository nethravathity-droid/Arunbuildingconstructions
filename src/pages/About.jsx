import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const values = [
  ["RESIDENTIAL", "Homes, villas and apartments built around how you live."],
  ["COMMERCIAL", "Offices, retail and workspaces planned for performance."],
  ["TURNKEY", "Design, construction and finishing under one coordinated team."],
  ["RENOVATION", "Existing spaces upgraded with structure, layout and finishes."],
];

const leaders = [
  {
    name: "Vasanth Kumar R",
    role: "Chairman",
    image: "/public/chairman.jpeg",
    align: "left",
    details: [
      "Chairman of Arun Building Constructions, guiding the company's vision, values and long-term direction.",
      "Focused on quality, integrity and building relationships that last well beyond handover.",
      "Sets the standard for how every project is planned, built and delivered across Bengaluru.",
    ],
  },
  {
    name: "Arun Kumar V",
    role: "Managing Director",
    image: "/Public/MD.jpeg",
    align: "right",
    details: [
      "Managing Director overseeing day-to-day operations, project execution and client coordination.",
      "Brings design, construction and site teams together so drawings and workmanship stay aligned.",
      "Committed to clear communication, disciplined delivery and spaces made for everyday living.",
    ],
  },
];

function LeaderPortrait({ name, image }) {
  const [missing, setMissing] = useState(true);

  return (
    <figure className="relative aspect-[3/4] w-full overflow-hidden border border-[#caa193]/35 bg-[#1a1714]">
      <img
        src={image}
        alt={name}
        className={`absolute inset-0 h-full w-full object-cover ${missing ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setMissing(false)}
        onError={() => setMissing(true)}
      />
      {missing ? (
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="font-conthrax text-[9px] tracking-[0.22em] text-[#caa193]">PORTRAIT</span>
          <span className="font-play text-xs text-white/45">Add {name}'s photograph here</span>
          <span className="font-play text-[10px] text-white/30">{image}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

function About() {
  return (
    <>
      <PageHero title="ARUN BUILDING CONSTRUCTIONS" />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <div className="relative z-[1] mx-auto max-w-5xl font-play text-[12px] leading-[1.9] text-gray-300 sm:text-base">
          <p className="mb-5">
            Arun Building Constructions delivers residential and commercial spaces through disciplined planning, quality workmanship and transparent execution. Every project begins with understanding the client's requirements and continues through careful planning, coordinated construction and final handover.
          </p>
          <p>
            Our approach brings design, construction and project coordination together to create spaces that are practical, refined and built for lasting value across Bengaluru.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent px-4 py-16 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <p className="text-center font-conthrax text-[10px] tracking-[0.28em] text-[#caa193]">LEADERSHIP</p>
        <h2 className="mt-4 text-center font-conthrax text-[12px] tracking-widest sm:text-xl">THE PEOPLE BEHIND THE WORK</h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-16 lg:gap-24">
          {leaders.map((leader) => (
            <article
              key={leader.role}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${leader.align === "right" ? "lg:[&>figure]:order-2" : ""}`}
            >
              <LeaderPortrait name={leader.name} image={leader.image} />
              <div>
                <p className="font-conthrax text-[10px] tracking-[0.22em] text-[#caa193]">{leader.role}</p>
                <h3 className="mt-3 font-penrise text-3xl tracking-wide text-[#f6ede5] sm:text-4xl">{leader.name}</h3>
                <div className="mt-6 space-y-4 font-play text-[13px] leading-[1.9] text-gray-300 sm:text-sm">
                  {leader.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black/25 px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">WHAT WE DO</h2>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text]) => (
            <article key={title}>
              <h3 className="font-conthrax text-[12px] uppercase tracking-wide text-[#caa193]">{title}</h3>
              <p className="mt-3 font-play text-xs leading-relaxed text-gray-300 sm:text-sm">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="border border-[#caa193]/70 px-8 py-2.5 font-conthrax text-[9px] uppercase tracking-wide text-[#caa193] hover:bg-[#caa193] hover:text-black"
          >
            EXPLORE OUR SERVICES
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default About;

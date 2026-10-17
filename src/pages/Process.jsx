import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const processSteps = [
  ["01", "CONSULTATION", "We begin by understanding your requirements, site, budget and overall vision."],
  ["02", "CONCEPT & DESIGN", "The initial concept, space planning and design direction are developed."],
  ["03", "PLANNING", "Scope, materials, drawings and schedules are coordinated before work begins."],
  ["04", "ESTIMATION & AGGREMENT APPROVAL", "We prepare the estimate, documentation and the approvals the project needs."],
  ["05", "CONSTRUCTION", "Execution proceeds with attention to workmanship, materials and schedule."],
  ["06", "FINISHING", "Fixtures, finishes and details are completed to bring the design together."],
  ["07", "HANDOVER", "After inspection and finishing touches, the completed space is handed over."],
];

function Process() {
  return (
    <>
      <PageHero title="OUR PROCESS" />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-20">
        <SectionOrnament className="mb-6" />
        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">FROM VISION TO REALITY</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-play text-[12px] text-gray-300 sm:text-base">
          Seven stages take your project from the first conversation to a completed space.
        </p>
        <div className="mx-auto mt-10 max-w-4xl">
          {processSteps.map(([number, title, text]) => (
            <article key={number} className="grid grid-cols-[52px_1fr] gap-4 border-b border-white/10 py-6">
              <span className="font-conthrax text-sm text-[#caa193]">{number}</span>
              <div>
                <h3 className="font-conthrax text-sm tracking-wide">{title}</h3>
                <p className="mt-2 font-play text-[11px] leading-relaxed text-gray-400 sm:text-sm">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="border border-[#caa193]/70 px-8 py-2.5 font-conthrax text-[9px] uppercase tracking-wide text-[#caa193] hover:bg-[#caa193] hover:text-black"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Process;

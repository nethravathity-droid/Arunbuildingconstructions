
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const processSteps = [
  [
    "01",
    "CONSULTATION",
    "Every successful project begins with a conversation. We take the time to understand your lifestyle, functional requirements, design preferences, site conditions and overall vision. We also discuss your budget, priorities and expected timeline to establish a clear foundation for the project.",
  ],
  [
    "02",
    "CONCEPT & DESIGN",
    "Our design process transforms your ideas into a considered design direction. We explore layouts, interior styles, color palettes, lighting concepts, textures and material combinations to create spaces that reflect your personality while balancing aesthetics, comfort and functionality.",
  ],
  [
    "03",
    "PLANNING & COORDINATION",
    "Once the concept is established, we develop the project plan and coordinate the details required for execution. This includes space planning, drawings, material selections, finish specifications, work schedules and coordination between the different trades involved in the project.",
  ],
  [
    "04",
    "ESTIMATION & AGREEMENT APPROVAL",
    "We prepare a detailed estimate based on the agreed scope of work, selected materials and project requirements. Costs, specifications, responsibilities and expected timelines are reviewed with you before proceeding. The necessary documentation and approvals are coordinated to ensure everyone understands the project expectations.",
  ],
  [
    "05",
    "CONSTRUCTION & EXECUTION",
    "With the planning in place, our team moves into execution. Civil work, installations, carpentry, electrical work, plumbing and other agreed activities are coordinated according to the project requirements. We focus on workmanship, appropriate material usage, site coordination and progress monitoring throughout this stage.",
  ],
  [
    "06",
    "INTERIOR FINISHING & DETAILING",
    "The finishing stage brings the entire design together. From wall finishes, flooring and ceiling details to lighting, furniture, fixtures and decorative elements, each component is carefully coordinated. We pay attention to proportions, alignment, material consistency and finishing details to achieve a refined overall appearance.",
  ],
  [
    "07",
    "FINAL INSPECTION & HANDOVER",
    "Before completion, the finished work is reviewed against the agreed scope and project requirements. We address identified finishing issues, complete the final detailing and coordinate the handover. Our goal is to deliver a thoughtfully finished space that is ready for you to enjoy, along with relevant handover information where applicable.",
  ],
];

function Process() {
  return (
    <>
      <PageHero title="OUR PROCESS" />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <SectionOrnament className="mb-6" />

        <h2 className="text-center font-conthrax text-[12px] tracking-widest sm:text-xl">
          FROM VISION TO REALITY
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center font-play text-[12px] leading-relaxed text-gray-300 sm:text-base">
          A thoughtfully structured journey that transforms your ideas into
          beautifully designed, carefully planned and professionally executed
          spaces. From the first consultation to the final handover, every
          stage is guided by attention to detail, clear communication and a
          commitment to quality.
        </p>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          {processSteps.map(([number, title, text]) => (
            <article
              key={number}
              className="grid grid-cols-[40px_1fr] gap-3 border-b border-white/10 py-6 sm:grid-cols-[52px_1fr] sm:gap-4 sm:py-8"
            >
              <span className="pt-0.5 font-conthrax text-sm text-[#caa193] sm:text-base">
                {number}
              </span>

              <div>
                <h3 className="font-conthrax text-[11px] leading-relaxed tracking-wide sm:text-sm">
                  {title}
                </h3>

                <p className="mt-3 font-play text-[11px] leading-7 text-gray-400 sm:text-sm sm:leading-8">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <h3 className="font-conthrax text-xs tracking-widest sm:text-base">
            LET'S CREATE SOMETHING EXCEPTIONAL
          </h3>

          <p className="mx-auto mt-4 max-w-2xl font-play text-[11px] leading-7 text-gray-400 sm:text-sm sm:leading-8">
            Whether you are planning a complete interior transformation or a
            carefully considered individual space, we bring your vision,
            practical planning and thoughtful detailing together to create
            interiors that feel distinctive, functional and timeless.
          </p>

          <Link
            to="/coantact"
            className="mt-7 inline-block border border-[#caa193]/70 px-8 py-3 font-conthrax text-[9px] uppercase tracking-wide text-[#caa193] transition-colors duration-300 hover:bg-[#caa193] hover:text-black sm:px-10 sm:text-[10px]"
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

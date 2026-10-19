
import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  Expand,
  MapPin,
  X,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionOrnament from "../components/SectionOrnament";
import CtaBand from "../components/CtaBand";

const projects = [
  {
    id: 1,
    category: "RESIDENTIAL",
    title: "CONTEMPORARY VILLA",
    location: "BENGALURU",
    type: "Residential Architecture",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    description:
      "A contemporary residential concept focused on clean architectural lines, natural light and a refined connection between indoor and outdoor spaces.",
  },
  {
    id: 2,
    category: "COMMERCIAL",
    title: "CORPORATE OFFICE",
    location: "BENGALURU",
    type: "Commercial Architecture",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    description:
      "A modern workplace concept designed around functionality, thoughtful space planning and a professional working environment.",
  },
  {
    id: 3,
    category: "RESIDENTIAL",
    title: "MODERN RESIDENCE",
    location: "BENGALURU",
    type: "Residential Design",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    description:
      "A contemporary home concept combining comfortable living areas, understated finishes and practical everyday functionality.",
  },
  {
    id: 4,
    category: "ARCHITECTURE",
    title: "LUXURY EXTERIOR",
    location: "BENGALURU",
    type: "Exterior Architecture",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    description:
      "An architectural exterior concept highlighting proportions, material combinations and a distinctive contemporary appearance.",
  },
  {
    id: 5,
    category: "RESIDENTIAL",
    title: "MODERN LIVING SPACE",
    location: "BENGALURU",
    type: "Residential Interiors",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    description:
      "A refined residential concept balancing visual simplicity, comfortable spaces and a considered modern aesthetic.",
  },
  {
    id: 6,
    category: "COMMERCIAL",
    title: "PREMIUM WORKSPACE",
    location: "BENGALURU",
    type: "Commercial Interiors",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    description:
      "A workspace concept that brings together contemporary styling, practical layouts and an organised professional atmosphere.",
  },
];

const categories = [
  "ALL",
  "RESIDENTIAL",
  "COMMERCIAL",
  "ARCHITECTURE",
];

function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.category === filter);

  const currentIndex = selectedProject
    ? visibleProjects.findIndex(
        (project) => project.id === selectedProject.id
      )
    : -1;

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedProject((current) => {
          if (!current) return current;

          const index = visibleProjects.findIndex(
            (project) => project.id === current.id
          );

          return visibleProjects[(index + 1) % visibleProjects.length];
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedProject((current) => {
          if (!current) return current;

          const index = visibleProjects.findIndex(
            (project) => project.id === current.id
          );

          return visibleProjects[
            (index - 1 + visibleProjects.length) %
              visibleProjects.length
          ];
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, visibleProjects]);

  const changeProject = (direction) => {
    if (currentIndex < 0) return;

    const nextIndex =
      (currentIndex + direction + visibleProjects.length) %
      visibleProjects.length;

    setSelectedProject(visibleProjects[nextIndex]);
  };

  return (
    <>
      {/* HERO */}
      <PageHero
        title="OUR PROJECTS"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#caa193]/5 blur-3xl" />

        <SectionOrnament className="mb-6" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-conthrax text-[10px] tracking-[0.3em] text-[#caa193] sm:text-xs">
            OUR SELECTED WORK
          </p>

          <h2 className="mt-4 font-conthrax text-xl leading-relaxed sm:text-2xl lg:text-3xl">
            SPACES BUILT AROUND
            <span className="mt-2 block text-[#caa193]">
              YOUR VISION
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-play text-sm leading-8 text-gray-300 sm:text-base">
            Explore architectural inspiration, residential concepts and
            commercial spaces that reflect a commitment to thoughtful design,
            practical planning and refined aesthetics. Every project begins
            with an idea and develops through careful attention to detail.
          </p>

          <p className="mx-auto mt-3 max-w-3xl font-play text-sm leading-8 text-gray-400">
            Browse the gallery by category to discover different styles and
            ideas for your next construction project.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-[#0b0b0b] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#caa193]/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* GALLERY HEADER */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-conthrax text-[10px] tracking-[0.25em] text-[#caa193]">
                EXPLORE THE COLLECTION
              </p>

              <h2 className="mt-3 font-conthrax text-lg sm:text-2xl">
                OUR <span className="text-[#caa193]">GALLERY</span>
              </h2>
            </div>

            <p className="font-play text-xs text-gray-400">
              {visibleProjects.length} PROJECT
              {visibleProjects.length !== 1 ? "S" : ""} SHOWN
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => {
              const active = filter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={active}
                  className={`min-h-11 border px-4 py-3 font-conthrax text-[8px] tracking-widest transition-all duration-300 sm:px-6 sm:text-[9px] ${
                    active
                      ? "border-[#caa193] bg-[#caa193] text-black"
                      : "border-white/15 bg-white/[0.02] text-white/70 hover:border-[#caa193] hover:text-[#caa193]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden border border-white/10 bg-[#121212] transition-all duration-500 hover:border-[#caa193]/50"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title}`}
                  className="relative block h-[320px] w-full overflow-hidden text-left sm:h-[350px] lg:h-[390px]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} architectural inspiration`}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute left-5 top-5 border border-white/30 bg-black/40 px-3 py-2 font-conthrax text-[8px] tracking-widest text-white backdrop-blur-sm">
                    {project.category}
                  </span>

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/40 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Expand size={16} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="mb-3 h-px w-10 bg-[#caa193] transition-all duration-500 group-hover:w-20" />

                    <p className="font-play text-[9px] uppercase tracking-[0.2em] text-[#caa193]">
                      {project.type}
                    </p>

                    <h3 className="mt-2 font-conthrax text-base leading-relaxed sm:text-lg">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 font-play text-[10px] tracking-wider text-white/70">
                      <MapPin size={12} className="text-[#caa193]" />
                      {project.location}
                    </div>
                  </div>
                </button>

                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                  <span className="font-play text-[10px] text-gray-400">
                    PROJECT {String(project.id).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-conthrax text-[8px] tracking-widest text-[#caa193] transition-colors hover:text-white"
                  >
                    VIEW DETAILS
                    <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* EMPTY STATE */}
          {visibleProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-play text-sm text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* GALLERY FOOTER */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 text-center">
            <ArrowDown size={17} className="text-[#caa193]" />

            <p className="max-w-xl font-play text-xs leading-7 text-gray-400">
              Have a project in mind? Let’s discuss your requirements and
              explore the right approach for your space.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL LIGHTBOX */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-[#caa193]/30 bg-[#101010] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#101010]/95 px-4 py-3 backdrop-blur sm:px-6">
              <span className="font-conthrax text-[9px] tracking-[0.2em] text-[#caa193]">
                PROJECT DETAILS
              </span>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-[#caa193] hover:text-[#caa193]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[250px] bg-black md:min-h-[450px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover md:absolute md:inset-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="font-conthrax text-[9px] tracking-[0.25em] text-[#caa193]">
                  {selectedProject.category}
                </p>

                <h2 className="mt-4 font-conthrax text-xl leading-relaxed sm:text-2xl">
                  {selectedProject.title}
                </h2>

                <div className="mt-5 flex items-center gap-2 font-play text-xs text-gray-400">
                  <MapPin size={14} className="text-[#caa193]" />
                  {selectedProject.location}
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                <p className="font-play text-xs leading-8 text-gray-300 sm:text-sm">
                  {selectedProject.description}
                </p>

                <p className="mt-4 font-play text-[10px] leading-6 text-gray-500">
                  This gallery image is presented as architectural inspiration.
                  Confirm project ownership and completion details before
                  publishing it as a completed company project.
                </p>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => changeProject(-1)}
                    aria-label="Previous project"
                    className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#caa193] hover:text-[#caa193]"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <span className="font-play text-[10px] text-gray-500">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(visibleProjects.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => changeProject(1)}
                    aria-label="Next project"
                    className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#caa193] hover:text-[#caa193]"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION */}
      <CtaBand />
    </>
  );
}

export default Projects;

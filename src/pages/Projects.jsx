import React, { useState } from "react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";

const projects = [
  { category: "RESIDENTIAL", title: "CONTEMPORARY VILLA", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85" },
  { category: "COMMERCIAL", title: "CORPORATE OFFICE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85" },
  { category: "RESIDENTIAL", title: "MODERN RESIDENCE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85" },
  { category: "ARCHITECTURE", title: "LUXURY EXTERIOR", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" },
  { category: "RESIDENTIAL", title: "MODERN LIVING SPACE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85" },
  { category: "COMMERCIAL", title: "PREMIUM WORKSPACE", meta: "BENGALURU", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85" },
];

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "ARCHITECTURE"];

function Projects() {
  const [filter, setFilter] = useState("ALL");
  const visible = filter === "ALL" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <PageHero
        title="GALLERY"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="relative overflow-hidden bg-transparent px-4 py-12 text-white sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`min-h-10 border px-4 font-conthrax text-[8px] tracking-widest sm:text-[9px] ${
                filter === category
                  ? "border-[#caa193] bg-[#caa193] text-black"
                  : "border-white/20 text-white/70 hover:border-[#caa193] hover:text-[#caa193]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-2">
          {visible.map((project, index) => (
            <article key={`${project.title}-${index}`} className="group relative h-[320px] overflow-hidden sm:h-[420px]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-conthrax text-[8px] tracking-[0.2em] text-[#caa193]">{project.category}</span>
                <h2 className="mt-1 font-conthrax text-xl">{project.title}</h2>
                <p className="mt-1 font-play text-[10px] text-white/70">{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Projects;

import { Link } from "react-router-dom";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#f6ede5] px-5 py-16 text-black sm:px-10 sm:py-20 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "url('/construction-bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "920px 660px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="mb-6 font-penrise text-3xl leading-tight tracking-wide text-[#a0624d] sm:text-4xl">
          Arun
          <br />
          Building Constructions 
                  </p>
        <h2 className="mt-8 font-conthrax text-sm tracking-widest sm:text-xl">
          Ready to Start Your Construction Project?
        </h2>
        <p className="mt-5 mb-6 font-play text-sm sm:text-base">
          Share your site details and we will come back with a clear direction, a considered estimate path and a realistic timeline.
        </p>
        <p className="font-play text-sm leading-relaxed sm:text-base">
          <Link to="/contact" className="font-semibold text-[#a0624d]">
            Book a Consultation →
          </Link>
          <br />
          <a href="https://wa.me/919945454529" className="font-semibold text-[#a0624d]">
            WhatsApp Us →
          </a>
        </p>
      </div>
    </section>
  );
}

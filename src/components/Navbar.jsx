import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";

const PHONE = "+91 99454 54529";

const linkBase =
  "relative flex items-center gap-1 py-7 text-[10px] uppercase tracking-wide text-white transition-colors duration-300 hover:text-[#caa193] xl:text-[13px]";

const serviceLinks = [
  ["Residential", "/services"],
  ["Commercial", "/services"],
  ["Turnkey", "/services"],
  ["Renovation", "/services"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#121212]/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div aria-hidden="true" className="h-[2px] w-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />

      <div className="relative h-[76px] px-4 text-white md:h-[108px] md:px-6">
        <div className="hidden h-full grid-cols-[auto_1fr_auto] items-center gap-5 md:grid">
          <Link
            to="/"
            className="site-logo-wrap flex h-[80px] w-[80px] shrink-0 items-center justify-center p-[3px]"
            aria-label="Arun Building Constructions home"
            onClick={closeMenu}
          >
            <img
              src="/arun1.png"
              alt="Arun Building Constructions"
              className="site-logo-img h-full w-full rounded-full object-cover object-center"
            />
          </Link>

          <div className="flex items-center justify-center gap-3 lg:gap-5 xl:gap-7">
            {[
              ["Home", "/"],
              ["About", "/about"],
            ].map(([label, to]) => (
              <div className="relative group" key={to}>
                <NavLink to={to} end={to === "/"} className={linkBase}>
                  {label}
                </NavLink>
                <span className="absolute bottom-5 left-0 h-[2px] w-0 bg-[#caa193] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

            <div className="group relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link to="/services" className={linkBase}>
                Services
                <ChevronDown size={14} className="text-[#caa193] transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <span className="absolute bottom-5 left-0 h-[2px] w-0 bg-[#caa193] transition-all duration-300 group-hover:w-full" />
              <div className={`absolute left-0 top-full z-50 pt-3 transition-all duration-300 ${servicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                <div className="w-[230px] overflow-hidden bg-black/80 backdrop-blur-md">
                  {serviceLinks.map(([label, to]) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-[#caa193] px-6 py-4 text-[12px] uppercase tracking-wide text-white transition-all hover:bg-white/5"
                    >
                      {label}
                      <ChevronRight size={12} className="text-[#caa193]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              ["Projects", "/projects"],
              ["Process", "/process"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <div className="relative group" key={to}>
                <NavLink to={to} className={linkBase}>
                  {label}
                </NavLink>
                <span className="absolute bottom-5 left-0 h-[2px] w-0 bg-[#caa193] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+919945454529" className="hidden items-center gap-1 transition-colors hover:text-[#caa193] xl:flex">
              <Phone size={14} />
              {PHONE}
            </a>
            <a
              href="https://wa.me/919945454529"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 transition-colors hover:text-[#97c38d] xl:flex"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-between md:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Home"
            className="site-logo-wrap flex h-[58px] w-[58px] items-center justify-center p-[2px]"
          >
            <img
              src="/arun1.png"
              alt="Arun Building Constructions"
              className="site-logo-img h-full w-full rounded-full object-cover object-center"
            />
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-black/95 md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col px-5 pb-6">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Projects", "/projects"],
            ["Process", "/process"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[13px] uppercase tracking-wide text-white"
            >
              {label}
            </NavLink>
          ))}
          <a href="tel:+919945454529" className="mt-4 inline-flex items-center gap-2 py-3 text-sm text-white/80">
            <Phone size={14} className="text-[#caa193]" />
            {PHONE}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

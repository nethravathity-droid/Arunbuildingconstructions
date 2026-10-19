import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const PHONES = [
  {
    number: "+91 99454 54529",
    tel: "+919945454529",
  },
  {
    number: "+91 99454 54525",
    tel: "+919945454525",
  },
];

const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Process", "/process"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative flex items-center py-3 text-[11px] uppercase tracking-[1.5px] transition-colors duration-300 xl:text-[12px] ${
      isActive
        ? "text-[#caa193]"
        : "text-white hover:text-[#caa193]"
    }`;

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#121212]/95 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      {/* ROSE GOLD TOP LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#caa193] via-[#e0b9a7] to-[#a0624d]" />

      {/* HEADER */}
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-7 md:h-[92px] md:px-8 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Arun Building Constructions home"
          className="site-logo-wrap flex h-[56px] w-[56px] shrink-0 items-center justify-center p-[2px] md:h-[72px] md:w-[72px]"
        >
          <img
            src="/arun1.png"
            alt="Arun Building Constructions"
            className="site-logo-img h-full w-full rounded-full object-cover object-center"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 md:flex lg:gap-6 xl:gap-8">
          {NAV_LINKS.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={linkClass}
              onClick={closeMenu}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-[#caa193] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP PHONE NUMBERS */}
        <div className="hidden shrink-0 flex-col gap-2 lg:flex">
          {PHONES.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="flex items-center gap-2 whitespace-nowrap text-[11px] tracking-wide text-white/85 transition-colors hover:text-[#caa193] xl:text-xs"
            >
              <Phone size={13} className="text-[#caa193]" />
              {phone.number}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-white transition-colors hover:border-[#caa193] hover:text-[#caa193] md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`overflow-hidden bg-[#121212]/98 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "visible max-h-[85vh] overflow-y-auto border-t border-white/10 opacity-100"
            : "invisible max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[600px] flex-col px-6 pb-6 pt-2 sm:px-8">

          {/* MOBILE LINKS */}
          {NAV_LINKS.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-[12px] uppercase tracking-[1.8px] transition-colors duration-300 ${
                  isActive
                    ? "text-[#caa193]"
                    : "text-white hover:text-[#caa193]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* MOBILE CONTACT NUMBERS */}
          <div className="mt-5 border border-[#caa193]/30 bg-white/[0.03] p-4">
            <p className="mb-3 text-[10px] uppercase tracking-[2px] text-[#caa193]">
              Call Us
            </p>

            <div className="flex flex-col gap-4">
              {PHONES.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-[#caa193]"
                >
                  <Phone
                    size={15}
                    className="shrink-0 text-[#caa193]"
                  />
                  {phone.number}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

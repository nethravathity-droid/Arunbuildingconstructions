import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const PHONE = "+91 99454 54529";
const EMAIL = "arunbuildingconstructions.1@gmail.com";
const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden text-white">
      <div className="bg-black">
        <div className="mx-auto flex min-h-[48px] max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:px-16 lg:py-0">
          <p className="font-play text-xs text-white/70">Arun Building Constructions · Bengaluru</p>
          <a href="tel:+919945454529" className="flex items-center gap-2 text-sm text-white/90 hover:text-[#caa193]">
            <Phone size={14} />
            {PHONE}
          </a>
        </div>
      </div>

      <div className="relative bg-[#f6ede5] text-black">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{ backgroundImage: "url('/construction-bg.svg')", backgroundRepeat: "repeat", backgroundSize: "920px 660px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-16">
          <nav className="flex flex-col items-center gap-3 md:items-start">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className="font-play text-sm text-black/70 hover:text-[#a0624d]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center text-center">
            <Link to="/" aria-label="Home">
              <img src="/arun1.png" alt="Arun Building Constructions" className="h-auto w-[170px] sm:w-[200px]" />
            </Link>
            <p className="mt-4 text-[9px] uppercase tracking-wide text-black/70 sm:text-[10px]">
              © Arun Building Constructions {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 font-play text-sm text-black/70 md:items-end">
            <a href={`tel:+919945454529`} className="flex items-center gap-2 hover:text-black">
              <Phone size={14} /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-black">
              <Mail size={14} /> {EMAIL}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Bengaluru, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

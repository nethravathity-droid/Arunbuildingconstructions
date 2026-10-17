import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollReveal from "./components/ScrollReveal";
import ConstructionBackground from "./components/ConstructionBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col bg-[#121212] text-[#f6ede5]">
        <ConstructionBackground />
        <ScrollToTop />
        <ScrollReveal />
        <Navbar />

        <main className="relative z-[1]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Projects />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="relative z-[1]">
          <Footer />
        </div>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;


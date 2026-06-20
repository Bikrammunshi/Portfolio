import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["home", "about", "experience", "projects", "certifications", "contact"];
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand" style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>
          BM.
        </div>
        
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
          <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a>

          <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}>Experience</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>Projects</a>
          <a href="#certifications" className={activeSection === "certifications" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("certifications"); }}>Certifications</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
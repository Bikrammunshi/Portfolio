import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import SmoothScroll from "./components/Layout/SmoothScroll";


// Sections
import HeroSection from "./components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import CertificationsSection from "./components/Sections/CertificationsSection";
import ContactSection from "./components/Sections/ContactSection";
import FooterSection from "./components/Sections/FooterSection";

import "./index.css";
import "./style.css";
import "./animations.css";
import "./components/Particle.css"; // Preserving the canvas particle styles

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      
      {/* Background Effect Layer */}
      <Particle />
      
      {/* App Content Layer */}
      <SmoothScroll>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          
          <main>
            <HeroSection />
            
            {/* Sections */}
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
            
          </main>

          <FooterSection />
        </div>
      </SmoothScroll>
    </div>
  );
}

export default App;
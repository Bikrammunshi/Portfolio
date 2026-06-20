import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import KineticText from "../Animations/KineticText";

import bikram from "../../Assets/Images required/Bikramaditya Munshi.png"

export default function HeroSection() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ delay: 1.4 });

    tl.fromTo(
      hero.querySelector(".hero-greeting"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        hero.querySelector(".hero-name"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        hero.querySelector(".hero-roles"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        hero.querySelector(".hero-cta"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
  }, { scope: heroRef });

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-name" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "clamp(300px, 40vw, 500px)", width: "100%" }}>

            {/* Bottom Layer: Image */}
            <div style={{ position: "absolute", zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <img
                src={bikram}
                alt="Bikramaditya Munshi"
                style={{ width: "clamp(250px, 35vw, 500px)", height: "auto", objectFit: "contain", filter: "brightness(0.95) drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
              />
            </div>

            {/* Top Layer: Name */}
            <div style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              paddingTop: "clamp(450px, 25vw, 280px)",
            }}>
              <KineticText>
                <span className="accent-name" style={{ display: "inline-block" }}>Bikramaditya Munshi</span>
              </KineticText>
            </div>

          </div>

          <div className="hero-cta" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            <a
              href="https://drive.google.com/file/d/1tZiCLRoJeso96YH3GUuuMuK4LsWNpJiP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>
            <a
              href="https://github.com/Bikrammunshi"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <AiFillGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bikramaditya-munshi-38b840219/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              href="https://tryhackme.com/p/Crypt1cr4ven"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              TryHackme
            </a>
          </div>
        </div>
      </div >
    </section >
  );
}

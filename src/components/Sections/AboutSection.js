import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const accents = el.querySelectorAll(".word.accent");
    const normals = el.querySelectorAll(".word:not(.accent)");

    // Initial state
    gsap.set([accents, normals], { opacity: 0, scale: 0.8, filter: "blur(10px)", display: "inline-block" });

    let currentAnimation = null;

    const playReveal = () => {
      if (currentAnimation) currentAnimation.kill();
      currentAnimation = gsap.timeline();
      currentAnimation.to(accents, {
        opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "back.out(1.5)",
        stagger: { amount: 0.5, from: "random" }
      })
      .to(normals, {
        opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out",
        stagger: { amount: 0.5, from: "random" }
      }, "-=0.4");
    };

    const playHide = () => {
      if (currentAnimation) currentAnimation.kill();
      currentAnimation = gsap.timeline();
      currentAnimation.to(normals, {
        opacity: 0, scale: 0.8, filter: "blur(10px)", duration: 0.5, ease: "power2.in",
        stagger: { amount: 0.3, from: "random" }
      })
      .to(accents, {
        opacity: 0, scale: 0.8, filter: "blur(10px)", duration: 0.5, ease: "power2.in",
        stagger: { amount: 0.3, from: "random" }
      }, "-=0.2");
    };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: playReveal,
      onLeave: playHide,
      onEnterBack: playReveal,
      onLeaveBack: playHide,
    });
  }, { scope: containerRef });

  return (
    <section id="about" className="section-padding" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", overflow: "hidden" }}>
      <div className="container" style={{ width: "100%", padding: "0 2rem" }}>
        <div className="massive-typography" ref={containerRef}>
          <span className="word">SECURING</span> <span className="word accent">NETWORKS</span>, <span className="word">THROWING</span> <span className="word accent">PUNCHES</span>,<br />
          <span className="word">WATCHING</span> <span className="word accent">LAP TIMES</span>. <span className="word">A HACKER'S</span> <span className="word accent">MIND</span>,<br />
          <span className="word">A FIGHTER'S</span> <span className="word accent">HEART</span>. <span className="word">ALWAYS PUSHING PAST THE</span> <span className="word accent">LIMIT</span>.
        </div>
      </div>
    </section>
  );
}

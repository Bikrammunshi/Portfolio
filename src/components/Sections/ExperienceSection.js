import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSection from "../Layout/ScrollSection";
import RevealText from "../Animations/RevealText";

import tryhackmeImg from "../../Assets/Images required/tryhackme_logo.jpeg";
import codingNinjasImg from "../../Assets/Images required/coding ninjas.jpeg";
import johndeerelogo from "../../Assets/Images required/john_deere_logo.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const gridRef = useRef(null);

  const experiences = [
    {
      title: "CTF-Player",
      org: "TryHackme",
      date: "Current Focus",
      desc: "Completed 250+ rooms on TryHackMe, ranked in the top 1% globally across penetration testing and security operations tracks",
      skills: ["Penetration Testing", "Security Operations", "Red Teaming"],
      img: tryhackmeImg
    },
    {
      title: "Security Engineer",
      org: "John Deere",
      date: "July 2025 - now",
      desc: "Working closely with the Network Security Team",
      skills: ["ZScaler", "Automation"],
      img: johndeerelogo
    },
    {
      title: "CyberSecurity Intern",
      org: "John Deere",
      date: "February 2025 - June 2025",
      desc: "Working Closely with the CyberSecurity Team and helping them out with automation scripts",
      skills: ["Phishing", "Automation", "Python"],
      img: johndeerelogo
    },
    {
      title: "President",
      org: "Coding Ninjas KIIT Chapter",
      date: "July 2024 - December 2024",
      desc: "As the President of the Coding Ninjas KIIT Chapter, I spearheaded a series of remarkable technical initiatives",
      skills: ["Leadership", "Team Management"],
      img: codingNinjasImg
    },
  ];

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".exp-photo-card");
    if (!cards || cards.length === 0) return;

    // Set initial hidden state
    gsap.set(cards, {
      opacity: 0,
      y: 80,
      rotationX: 20,
      rotationY: (i) => (i % 2 === 0 ? -8 : 8),
      scale: 0.88,
      transformPerspective: 900,
      transformOrigin: "center bottom",
    });

    // Create per-card scroll trigger with stagger
    ScrollTrigger.create({
      trigger: gridRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger: {
            amount: 0.5,
            from: "start",
          },
          clearProps: "transform,filter",
        });
      },
      onLeave: () => {
        gsap.to(cards, {
          opacity: 0,
          y: -60,
          scale: 0.92,
          duration: 0.6,
          ease: "power2.in",
          stagger: { amount: 0.25, from: "end" },
        });
      },
      onEnterBack: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
          ease: "expo.out",
          stagger: { amount: 0.4, from: "end" },
          clearProps: "transform,filter",
        });
      },
      onLeaveBack: () => {
        gsap.to(cards, {
          opacity: 0,
          y: 80,
          rotationX: 20,
          rotationY: (i) => (i % 2 === 0 ? -8 : 8),
          scale: 0.88,
          duration: 0.6,
          ease: "power2.in",
          stagger: { amount: 0.25, from: "start" },
        });
      },
    });
  }, { scope: gridRef });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <ScrollSection direction="up">
          <span className="section-label">Trajectory</span>
          <RevealText tag="h2" className="section-title">
            < span className="accent">Experience</span>
          </RevealText>
        </ScrollSection>

        <div ref={gridRef} className="exp-card-grid" style={{ marginTop: "3rem" }}>
          {experiences.map((exp, index) => (
            <div key={index} className="exp-photo-card">
              {/* Background image — top 60% */}
              <div
                className="exp-photo-bg"
                style={{ backgroundImage: exp.img ? `url(${exp.img})` : "none" }}
              />
              {/* Fallback gradient if no image */}
              {!exp.img && <div className="exp-photo-fallback" />}

              {/* Org name strip — bottom 40%, fades on hover */}
              <div className="exp-org-strip">
                <p className="exp-org-strip-name">{exp.org}</p>
                <span className="exp-org-strip-label">{exp.title}</span>
              </div>

              {/* Date badge */}
              <div className="exp-date-badge">{exp.date}</div>

              {/* Hover overlay: slides in from left */}
              <div className="exp-hover-overlay">
                <div className="exp-hover-content">
                  <span className="exp-hover-org">{exp.org}</span>
                  <h3 className="exp-hover-title">{exp.title}</h3>
                  <p className="exp-hover-desc">{exp.desc}</p>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="hover-card-skills" style={{ marginTop: "1rem" }}>
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="hover-card-skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection({
  children,
  className = "",
  direction = "up",
  stagger = false,
  playRepeatedly = false,
  id,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger
      ? el.querySelectorAll(".scroll-child")
      : [el];

    let fromVars = {};
    let toVars = {
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: stagger ? 0.12 : 0,
      clearProps: "filter,transformPerspective",
    };

    switch (direction) {
      case "cinematic-slam":
        fromVars = { scale: 4, filter: "blur(30px)", opacity: 0 };
        toVars.scale = 1;
        toVars.filter = "blur(0px)";
        toVars.ease = "expo.out";
        toVars.duration = 1.5;
        break;
      case "elegant-drift":
        fromVars = {
          y: 60,
          opacity: 0,
          filter: "blur(10px)",
          rotation: 2,
        };
        toVars.y = 0;
        toVars.opacity = 1;
        toVars.filter = "blur(0px)";
        toVars.rotation = 0;
        toVars.ease = "power3.out";
        toVars.duration = 1.5;
        toVars.stagger = 0.1;
        break;
      case "waypoint-travel":
        fromVars = { z: -2000, x: -800, opacity: 0, rotationY: 45, transformPerspective: 1000 };
        toVars.z = 0;
        toVars.x = 0;
        toVars.rotationY = 0;
        toVars.ease = "power3.out";
        toVars.duration = 2;
        toVars.stagger = 0.2;
        break;
      case "drone-survey":
        fromVars = { rotationX: 60, y: 300, scale: 0.8, opacity: 0, transformPerspective: 1000 };
        toVars.rotationX = 0;
        toVars.y = 0;
        toVars.scale = 1;
        toVars.ease = "power2.out";
        toVars.duration = 1.5;
        toVars.stagger = 0.1;
        break;
      case "neon-pulse":
        fromVars = { filter: "brightness(4) blur(15px)", scale: 0.5, opacity: 0 };
        toVars.filter = "brightness(1) blur(0px)";
        toVars.scale = 1;
        toVars.ease = "back.out(2)";
        toVars.duration = 1.2;
        toVars.stagger = 0.1;
        break;
      case "up":
      default:
        fromVars = { y: 50, opacity: 0 };
        toVars.y = 0;
        break;
    }

    gsap.fromTo(targets, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: playRepeatedly ? "play reverse play reverse" : "play none none none",
        once: !playRepeatedly,
      },
    });
  }, { scope: ref, dependencies: [direction, stagger, playRepeatedly] });

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
}

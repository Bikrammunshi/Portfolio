import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealText({ children, tag = "h2", className = "", delay = 0 }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent;
    el.innerHTML = "";
    const chars = [];

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.clipPath = "inset(100% 0 0 0)";
      span.style.willChange = "clip-path";
      el.appendChild(span);
      chars.push(span);
    });

    gsap.to(chars, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.6,
      stagger: 0.03,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: ref, dependencies: [delay] });

  const Tag = tag;
  return <Tag ref={ref} className={className}>{children}</Tag>;
}

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SignatureSVG({ className = "" }) {
  const svgRef = useRef(null);

  useGSAP(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll("path");

    paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 75%",
        once: true,
      },
    });

    paths.forEach((path, i) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        i * 0.3
      );
    });

    tl.to(svg, {
      scale: 2.5,
      opacity: 0.04,
      duration: 2,
      ease: "power2.out",
    }, "-=0.5");
  }, { scope: svgRef });

  return (
    <svg
      ref={svgRef}
      className={`signature-svg ${className}`}
      viewBox="0 0 200 100"
      width="200"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized "BM" monogram */}
      <path
        d="M 20 80 L 20 20 C 20 20 50 20 50 35 C 50 50 20 50 20 50 C 20 50 55 50 55 65 C 55 80 20 80 20 80 Z"
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M 70 80 L 70 20 L 100 50 L 130 20 L 130 80"
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
      />
      {/* Underline flourish */}
      <path
        d="M 10 90 Q 80 85 180 90"
        strokeWidth="1.5"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}

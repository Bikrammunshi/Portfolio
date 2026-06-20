import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GuidePath() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        w: window.innerWidth,
        h: document.documentElement.scrollHeight,
      });
    };

    updateDimensions();
    // Delay recalculation to account for dynamic content
    const timer = setTimeout(updateDimensions, 2000);
    window.addEventListener("resize", updateDimensions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useGSAP(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    if (!path || !glow || dimensions.h === 0) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    glow.style.strokeDasharray = len;
    glow.style.strokeDashoffset = len;

    gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
  }, { scope: svgRef, dependencies: [dimensions] });

  if (dimensions.h === 0) return null;

  const { w, h } = dimensions;
  const cx = w / 2;
  // S-curve path that weaves down the page
  const segH = h / 8;
  const d = `
    M ${cx} 0
    C ${cx} ${segH * 0.5}, ${w * 0.2} ${segH * 0.5}, ${w * 0.2} ${segH}
    C ${w * 0.2} ${segH * 1.5}, ${w * 0.8} ${segH * 1.5}, ${w * 0.8} ${segH * 2}
    C ${w * 0.8} ${segH * 2.5}, ${w * 0.25} ${segH * 2.5}, ${w * 0.25} ${segH * 3}
    C ${w * 0.25} ${segH * 3.5}, ${w * 0.75} ${segH * 3.5}, ${w * 0.75} ${segH * 4}
    C ${w * 0.75} ${segH * 4.5}, ${w * 0.3} ${segH * 4.5}, ${w * 0.3} ${segH * 5}
    C ${w * 0.3} ${segH * 5.5}, ${w * 0.7} ${segH * 5.5}, ${w * 0.7} ${segH * 6}
    C ${w * 0.7} ${segH * 6.5}, ${w * 0.35} ${segH * 6.5}, ${w * 0.35} ${segH * 7}
    C ${w * 0.35} ${segH * 7.5}, ${cx} ${segH * 7.8}, ${cx} ${h}
  `;

  return (
    <div className="guide-path-container">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        style={{ width: w, height: h }}
      >
        <path ref={glowRef} d={d} className="guide-path-glow" />
        <path ref={pathRef} d={d} className="guide-path-line" />
      </svg>
    </div>
  );
}

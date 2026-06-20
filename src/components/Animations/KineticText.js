import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KineticText({ children, tag = "h2", className = "" }) {
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    let proxy = { skew: 0 };
    let skewSetter = gsap.quickSetter(textRef.current, "skewY", "deg");
    let scaleSetter = gsap.quickSetter(textRef.current, "scaleY");
    let clampSkew = gsap.utils.clamp(-1, 1);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clampSkew(self.getVelocity() / -80);

        // Only update if the new skew is more extreme, to allow the spring back to 0
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
            overwrite: true,
            onUpdate: () => {
              skewSetter(proxy.skew);
              // Slight stretch effect based on skew magnitude
              scaleSetter(1 + Math.abs(proxy.skew) / 50);
            }
          });
        }
      }
    });
  }, { scope: wrapperRef });

  const Tag = tag;
  return (
    <div ref={wrapperRef} style={{ display: "inline-block", transformOrigin: "bottom center" }}>
      <Tag ref={textRef} className={className} style={{ display: "inline-block", willChange: "transform" }}>
        {children}
      </Tag>
    </div>
  );
}

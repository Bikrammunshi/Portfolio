import React from "react";
import ScrollSection from "../Layout/ScrollSection";
import RevealText from "../Animations/RevealText";
import HoverCard from "../Cards/HoverCard";

import ipscanner from "../../Assets/Images required/Advanced-IP-Scanner-logo-886x590.webp"
import securityjournal from "../../Assets/Images required/securityjournal.png"
export default function ProjectsSection() {
  const projects = [
    {
      title: "IP Scanner",
      subtitle: "Script",
      imgPath: ipscanner,
      ghLink: "https://github.com/Bikrammunshi/IP-Scanner",
      skills: ["Networking", "Python", "TCP/IP"],
    },
    {
      title: "Trust to threat: the dynamics of insider risk in network security ecosystems",
      subtitle: "Publication",
      imgPath: securityjournal,
      ghLink: "https://link.springer.com/article/10.1057/s41284-026-00542-3",
      skills: ["Insider Threat"],
    },

  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <ScrollSection direction="up">
          <span className="section-label">Showcase</span>
          <RevealText tag="h2" className="section-title">
            Scripts & <span className="accent">Publications</span>
          </RevealText>
        </ScrollSection>

        <ScrollSection direction="drone-survey" playRepeatedly={true} stagger className="card-grid" style={{ marginTop: "3rem" }}>
          {projects.map((proj, i) => (
            <HoverCard key={i} {...proj} />
          ))}
        </ScrollSection>
      </div>
    </section>
  );
}

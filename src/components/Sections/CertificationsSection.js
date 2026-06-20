import React from "react";
import ScrollSection from "../Layout/ScrollSection";
import RevealText from "../Animations/RevealText";
import HoverCard from "../Cards/HoverCard";

import tryhackme from "../../Assets/Images required/tryhackme_logo.jpeg"
import ine from "../../Assets/Images required/ine.jpeg"
import ccap from "../../Assets/Images required/secops_group_logo.jpg"
import uom from "../../Assets/Images required/university of maryland.jpeg"
import eccouncil from "../../Assets/Images required/ec-council.jpg"
export default function CertificationsSection() {
  const certs = [
    {
      title: "Junior Penetration Tester (eJPTv2)",
      imgPath: ine,
      credentialLink: "https://drive.google.com/file/d/1Z3A_3gQsv-TCyOSLRXYxFeJ3f4rjHe-z/view?usp=sharing",
      skills: ["Assessment Methodologies", "Web App Pen Testing", "Host/Network Pen Testing"],
    },
    {
      title: "TryHackme PT1",
      imgPath: tryhackme,
      credentialLink: "https://assets.tryhackme.com/certification-certificate/68b27d01db70870385cc7b96.pdf",
      skills: ["Penetration Testing"],
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      imgPath: eccouncil,
      credentialLink: "https://drive.google.com/file/d/1u-a1O_pWKyIIkaGoZpM_7pgW7RmtHGWN/view?usp=sharing",
      skills: ["CyberSecurity"],
    },
    {
      title: "Certified AppSec Practitioner (CAP)",
      imgPath: ccap,
      credentialLink: "https://drive.google.com/file/d/1nZSniPmMJyELyXb2jSP-pqtOyCfvEjqY/view?usp=sharing",
      skills: ["Cybersecurity", "OWASP"],
    },
    {
      title: "Certified Social Engineering Defense Practitioner (CSEDP)",
      imgPath: ccap,
      credentialLink: "https://drive.google.com/file/d/1WQIePVOE_6POQPbNlGudleL0djFIAxel/view?usp=sharing",
      skills: ["Social Engineering"],
    },
    {
      title: "Cybersecurity for Everyone",
      imgPath: uom,
      credentialLink: "https://drive.google.com/file/d/1e3YNjAcr_egFNWO2LaDnp9-iBk3pssbB/view?usp=sharing",
      skills: ["Cyber Threat Intelligence"],
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-narrow">
        <ScrollSection direction="up">
          <span className="section-label">Achievements</span>
          <RevealText tag="h2" className="section-title">
            <span className="accent">Certifications</span>
          </RevealText>
        </ScrollSection>

        <ScrollSection direction="neon-pulse" playRepeatedly={true} stagger className="card-grid" style={{ marginTop: "3rem" }}>
          {certs.map((cert, i) => (
            <HoverCard key={i} {...cert} ghLink={cert.credentialLink} />
          ))}
        </ScrollSection>
      </div>
    </section>
  );
}

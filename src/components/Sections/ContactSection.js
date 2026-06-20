import React from "react";
import ScrollSection from "../Layout/ScrollSection";
import RevealText from "../Animations/RevealText";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function ContactSection() {
  const contacts = [
    {
      name: "Email",
      value: "Direct Message",
      link: "mailto:bikrammunshi@hotmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "LinkedIn",
      value: "Bikramaditya Munshi",
      link: "https://www.linkedin.com/in/bikramaditya-munshi-38b840219/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "GitHub",
      value: "@Bikrammunshi",
      link: "https://github.com/Bikrammunshi",
      icon: <AiFillGithub />,
    },
    {
      name: "TryHackMe",
      value: "Crypt1cr4ven",
      link: "https://tryhackme.com/p/Crypt1cr4ven",
      icon: <SiTryhackme />,
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <ScrollSection direction="up">
          <span className="section-label">Get in Touch</span>
          <RevealText tag="h2" className="section-title">
            Secure <span className="accent">Channels</span>
          </RevealText>
        </ScrollSection>

        <ScrollSection direction="neon-pulse" playRepeatedly={true} stagger className="contact-command-grid" style={{ marginTop: "3rem" }}>
          {contacts.map((contact, i) => (
            <a key={i} href={contact.link} target="_blank" rel="noreferrer" className="contact-command-card scroll-child">
              <div className="contact-command-icon">{contact.icon}</div>
              <div className="contact-command-info">
                <h4>{contact.name}</h4>
                <span>{contact.value}</span>
              </div>
              <div className="contact-command-action">
                <span>Connect</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </ScrollSection>
      </div>
    </section>
  );
}

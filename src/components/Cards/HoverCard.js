import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

export default function HoverCard({
  imgPath,
  title,
  subtitle,
  description,
  skills = [],
  ghLink,
  demoLink,
  credentialLink,
}) {
  // Parse skills from description if not provided as array
  const parsedSkills = skills.length > 0 ? skills : parseSkills(description);
  const cleanDesc = cleanDescription(description);

  return (
    <div className="hover-card scroll-child">
      {imgPath && (
        <div className="hover-card-thumb">
          <img src={imgPath} alt={title} loading="lazy" />
          <div className="hover-card-overlay">
            {parsedSkills.length > 0 && (
              <div className="hover-card-overlay-skills">
                {parsedSkills.map((skill, i) => (
                  <span key={i} className="hover-card-overlay-tag">{skill}</span>
                ))}
              </div>
            )}
            {(ghLink || credentialLink || demoLink) && (
              <a
                href={ghLink || credentialLink || demoLink}
                target="_blank"
                rel="noreferrer"
                className="hover-card-overlay-text"
                onClick={(e) => e.stopPropagation()}
              >
                <BsLink45Deg /> View Details
              </a>
            )}
          </div>
          {/* Persistent title strip */}
          <div className="hover-card-title-strip">
            {subtitle && <span className="hover-card-strip-sub">{subtitle}</span>}
            <h3 className="hover-card-strip-title">{title}</h3>
          </div>
        </div>
      )}
      {!imgPath && (
        <>
          <div className="hover-card-body">
            <h3 className="hover-card-title">{title}</h3>
            {subtitle && <p className="hover-card-subtitle">{subtitle}</p>}
            {cleanDesc && <p className="hover-card-desc">{cleanDesc}</p>}
            {parsedSkills.length > 0 && (
              <div className="hover-card-skills">
                {parsedSkills.map((skill, i) => (
                  <span key={i} className="hover-card-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          {(ghLink || demoLink || credentialLink) && (
            <div className="hover-card-actions">
              {ghLink && (
                <a href={ghLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
                  <BsGithub /> {credentialLink ? "Credential" : "GitHub"}
                </a>
              )}
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
                  <BsLink45Deg /> Demo
                </a>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function parseSkills(desc) {
  if (!desc) return [];
  const skillMatch = desc.match(/Skills:\s*([\s\S]*?)(?:\n\n|$)/i);
  if (!skillMatch) return [];
  return skillMatch[1]
    .split(/[\n\t,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && s !== "Skills:");
}

function cleanDescription(desc) {
  if (!desc) return "";
  // Remove skills section from description
  return desc
    .replace(/\n\n\s*Skills:\s*[\s\S]*$/i, "")
    .replace(/\\n/g, " ")
    .replace(/\\t/g, " ")
    .trim();
}

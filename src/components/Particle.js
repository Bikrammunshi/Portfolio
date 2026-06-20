import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particle.css";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    // Loads the entire tsparticles engine
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          // Explicitly make the background transparent so the dark body shows through
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // The net will connect to the mouse on hover
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
                color: "#FFA500"
              }
            },
          },
        },
        particles: {
          color: {
            value: "#FFA500", // Pure orange particles
          },
          links: {
            color: "#FFA500", // Pure orange links
            distance: 150,
            enable: true, // This enables the mesh/net effect
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Number of particles forming the network
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
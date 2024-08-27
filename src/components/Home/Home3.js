import React from "react";
import Typewriter from "typewriter-effect";

function Home3() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Enthusiast",
          "Ethical Hacker",
          "Penetration Tester",
          "CTF Player",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Home3;
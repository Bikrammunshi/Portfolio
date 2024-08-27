import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="skills-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          </Col>
        </Row>
        <h1 className="project-heading">
          Cybersecurity / Ethical <strong className="purple">Hacking Tools </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Other</strong> 
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default Skills;
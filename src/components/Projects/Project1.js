import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Project from "./Project";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Projects </strong>
        </h1>
       
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Project             
            imgPath = {"https://raw.githubusercontent.com/Bikrammunshi/Portfolio-Public-Files/main/Advanced-IP-Scanner-logo-886x590.webp"}
              isBlog={false}
              title="IP Scanner"
              subtitle="Python"
              description="
              This Python script is a network utility designed for scanning a range of IP addresses and checking which ones are online (up) and then scanning those online IPs for open TCP ports."
              ghLink="https://github.com/Bikrammunshi/IP-Scanner"
            />
          
          </Col>
          
          
        </Row>
         
        
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certification from "./Certification";
import Particle from "../Particle";

function certifications() {
  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="certification-heading">
         <strong className="purple">Certifications </strong>
        </h1>
        <br></br>
        <br></br>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="certification-card">
            <Certification   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/ine.jpeg?raw=true"}
            isBlog={false}
              title="Junior Penetration Tester (eJPTv2)"
              subtitle={'INE\nJanuary 2024\n'}
              description={"This certification focuses on hands-on experience in penetration testing which covers the fundamental topics like network security, web application testng, and vulnerability assessment. \n\n Skills: \n\tAssessment Methodologies \n\t Web Application Penetration Testing \n\t Host and Networking Penetration Testing \n\n"}
              ghLink = "https://drive.google.com/file/d/1Z3A_3gQsv-TCyOSLRXYxFeJ3f4rjHe-z/view?usp=sharing"
             >
            </Certification>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="certification-card">
            <Certification   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/university%20of%20maryland.jpeg?raw=true"}
            isBlog={false}
              title="Cybersecurity for Everyone"
              subtitle={'University of Maryland\nMarch 2024\n'}
              description={"This certification provides fundamental knowledge in ethical hacking and cybersecurity. This certification covers key concepts such as network security, vulnerability assesnent and intrusion detection, equipping professionals with the essential skills to identify and address cyber threats. \n\n Skills: \n\tCyber Threat Intelligence \n\n"}
              ghLink = "https://drive.google.com/file/d/1e3YNjAcr_egFNWO2LaDnp9-iBk3pssbB/view?usp=sharing"
            >
            </Certification>
          </Col>
           
        </Row>
        
        

      </Container>
    </Container>
  );
}

export default certifications;
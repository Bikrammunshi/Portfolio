import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experience from "./Experience";
import Particle from "../Particle";

function Experiences() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
         <strong className="purple">Experiences </strong>
        </h1>
        <br></br>
        <br></br>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/tryhackme_logo.jpeg?raw=true"}
            isBlog={false}
              title="CTF Player"
              subtitle={'TryHackme\nJune 2023-Present\n'}
              description={"Currently in rank 11248 (TOP 1%) \n\n Skills: \n\tCTF"}
              
             >
            </Experience>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/coding%20ninjas.jpeg?raw=true"}
            isBlog={false}
              title="President"
              subtitle={'Coding Ninja: KIIT Chapter\nJuly 2024-Present\n'}
              description={'As the President of the Coding Ninjas: KIIT Chapter at KIIT, I have spearheaded a series of remarkable technical initiatives. \n\n Skills: \n\t Team Management\n\t Leadership'}
            >
            </Experience>
          </Col>
           
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/highradius_logo.jpeg?raw=true"}
            isBlog={false}
              title="Consulting Intern"
              subtitle={'HighRadius\nMay 2024-July 2024\n'}
              description={"As the consulting intern of HighRadius, I learnt the process of application of Cash in the process of order to cash in a business to business scenario. My role was to understand the cash application product of HighRadius and configure them accordingly to the various requirements of clients. \n\n Skills: \n\tOrder to Cash \n\tCommunication \n\n"}
              ghLink = "https://drive.google.com/file/d/1I6MFvwynOF4wh4O6xlLcuOr75XV4hFtY/view?usp=sharing"
            >
            </Experience>
          </Col>
           
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/tesltra.jpeg?raw=true"}
            isBlog={false}
              title="Virtual Internship"
              subtitle={'Telstra\nOctober 2023\n'}
              description={"Learnt about various cybersecurity concepts \n\n Skills: \n\tCompliance \n\t Governance \n\t Incident Triange \n\t Network Analysis \n\t Root Cause Analysis \n\t Security Engineering\n\n"}
              ghLink = "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Telstra%20AU/RNhbu8QnDzthwynEf_Telstra_ZnqZmkRg24sY6EyQp_1698154181198_completion_certificate.pdf"
            >
            </Experience>
          </Col>
           
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/mastercard.jpeg?raw=true"}
            isBlog={false}
              title="Virtual Internship"
              subtitle={'Mastercard\nSpetember 2023\n'}
              description={"Learnt what is phishing and how to spread awarness and protect ourselve from different types of phishing \n\n Skills: \n\tAnti-phishing \n\n"}
              ghLink = "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_ZnqZmkRg24sY6EyQp_1695117292893_completion_certificate.pdf"
            >
            </Experience>
          </Col>
           
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/kiit%20logo.jpeg?raw=true"}
            isBlog={false}
              title="Summer Training"
              subtitle={'Kalinga Institute of Industrial Technology\n May 2023-July 2023\n'}
              description={"Done Cyber Security Summer Training Course 2023 offered by Career Advisory and Augmentation School (CAAS) under Training and Placement (KIIT) in collaboration with Katallyst Consortium Pvt. Ltd. \n\n Skills: \n\tCybersecurity \n\n"}
              ghLink = "https://drive.google.com/file/d/1XdE7d6P9Bpzt9inz4GKQjZWIA_qtapNH/view?usp=sharing"
             >
            </Experience>
          </Col>
           
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={9} className="Experience-card">
            <Experience   
            imgPath = {"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/cyseck_logo.jpeg?raw=true"}
            isBlog={false}
              title="Top 25 Finisher"
              subtitle={'Cyzeck Digital Defenders 2023\nJune 2023\n'}
              description={"Finished in top 25 in the Digital Defenders 2023 CTF held by Cyzeck \n\n Skills: \n\tCryptography \n\tAnalytical Thinking \n\tNetwork Log Analytics \n\tDigital Forensics"}
              
             >
            </Experience>
          </Col>
           
        </Row>
        

        


      </Container>
    </Container>
  );
}

export default Experiences;
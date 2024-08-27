import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';
import ResumeButton from './../../ResumeButton';
import MailingForm from "./MailingForm";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            
            <p className="home-about-body"  style={{textAlign: 'justify'}}>
              <br />I am graduated in B.tech.
              I am a motivated and versatile professional, always eager to embrace new challenges. Driven by a passion for learning, I am committed to delivering high-quality results. With a positive attitude and a growth mindset, I am prepared to make meaningful contributions and achieve remarkable success.
              
              <br />
              <br />
              <ResumeButton />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/%E2%80%94Pngtree%E2%80%94computer%20hacker_5418075.png?raw=true"} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
            <Col>
            <MailingForm />
            </Col>
          <Col md={12} className="home-about-social">
          
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bikrammunshi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bikramaditya-munshi-38b840219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Bikramaditya Munshi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Home3 />
              </div>
            </Col>
            
            
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                //src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/pic_edited-removebg-preview.png?raw=true"}
                //alt="home pic"
                //className="img-fluid"
                //style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
//give pic later in home pic
export default Home;
import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/git.png?raw=true"} alt="Git" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>   Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/GitHub-Mark.png?raw=true"} alt="Github" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>   Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/Visual_Studio_Code_1.35_icon.svg.png?raw=true"} alt="VS Code" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>    VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/html5-badge-h-solo.png?raw=true"} alt="HTML" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp; HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/CSS3_logo_and_wordmark.svg.png?raw=true"} alt="CSS" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://raw.githubusercontent.com/Bikrammunshi/Portfolio-Public-Files/2137b40035c6fc833cdf1ddd2970b5f496473f52/python-original.svg"} alt="Python" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://raw.githubusercontent.com/Bikrammunshi/Portfolio-Public-Files/2137b40035c6fc833cdf1ddd2970b5f496473f52/mysql-original-wordmark.svg"} alt="MySQL" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/postgresql.png?raw=true"} alt="Postgresql" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Postgresql</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/Wireshark_Icon.png?raw=true"} alt="Wireshark" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>   Wireshark</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/nmap.png?raw=true"} alt="Nmap" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>   Nmap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/burpsuite.png?raw=true"} alt="Burpsuite" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}>   Burpsuite</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/john%20the%20ripper.png?raw=true"} alt="John the Ripper" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  John the Ripper</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/hashcat.png?raw=true"} alt="Hashcat" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Hashcat</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://raw.githubusercontent.com/Bikrammunshi/Portfolio-Public-Files/abe27f312f659221c10c06989fc15289a5d930f5/hydra-logo.svg"} alt="Hydra" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Hydra</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/metasploit.png?raw=true"} alt="Metasploit" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Metasploit</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/netcat.jpg?raw=true"} alt="Netcat" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Netcat</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={"https://github.com/Bikrammunshi/Portfolio-Public-Files/blob/main/sqlmap.png?raw=true"} alt="Sqlmap" style={{ width: '100px', height: '100px' }} />  <span style={{ fontSize: '35px', color: '#FFFFFF' }}> &nbsp;  Sqlmap</span>
      </Col>
    </Row>
  );
}

export default Techstack;
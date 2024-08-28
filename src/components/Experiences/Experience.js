import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ExperienceCards(props) {
  return (
    <Card className="experience-card-view" style={{ width: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ width: '100px', height: '100px', marginRight: '10px' }} // Adjust size and spacing
      />
      <div>
        <Card.Title style={{ marginTop: '10px' }}>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ marginTop: '10px'}}>
          {props.subtitle.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== props.subtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </Card.Subtitle>

        
      </div>
      </div>
      <Card.Body>
      <div>
      <Card.Text style={{  textAlign: "justify"}}>
      {props.description.split('\n').map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
      {line.split('\t').map((segment, segmentIndex) => (
      <React.Fragment key={segmentIndex}>
        {segment}
        {segmentIndex !== line.split('\t').length - 1 && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} {/* Add tabs */}
      </React.Fragment>
      ))}
      {lineIndex !== props.description.split('\n').length - 1 && <br />} {/* Add line breaks */}
      </React.Fragment>
      ))}
      
        </Card.Text>
        </div>
        
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          Credential
        </Button>
      )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "1px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
      
    </Card>
  );
}
export default ExperienceCards;
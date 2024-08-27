// src/ResumeButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

function ResumeButton() {
  const resumeUrl = 'https://drive.google.com/file/d/1ScYtwdYmAVpHR8V1s78nXYsjTY-1ogOp/view?usp=sharing';

  return (
    <div className="resume-section">
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="primary" className="like-btn">
          Check Resume
        </Button>
      </a>
    </div>
  );
}

export default ResumeButton;

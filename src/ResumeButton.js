// src/ResumeButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

function ResumeButton() {
  const resumeUrl = 'https://drive.google.com/file/d/1F0ajT7XPgnv-jwHK3dKjxf7Y0VhUwp5V/view?usp=sharing';

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

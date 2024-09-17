import React from 'react';
import './vision.css';

const VisionMission = () => {
  return (
    <div className="vision-mission-wrapper">
      <h1 className="page-heading">Mission and Vision</h1>
      <div className="vision-mission-container">
        <div className="image-background"></div>
        <div className="content-container">
          <h2>Mission</h2>
          <p>
            Our mission is to leverage cutting-edge AI technology to revolutionize
            medical diagnostics, improving accuracy, speed, and patient outcomes
            through innovative solutions.
          </p>
          <h2>Vision</h2>
          <p>
            We envision a future where AI-driven healthcare solutions empower
            physicians and patients worldwide, transforming the way medical
            insights are generated and utilized for better health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;

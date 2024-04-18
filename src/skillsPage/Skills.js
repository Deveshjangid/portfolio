import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const SkillsPage = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    // Simulate showing skills after a delay
    const showSkillsTimeout = setTimeout(() => {
      setShowSkills(true);
    }, 1000);

    // Clear timeout on component unmount
    return () => clearTimeout(showSkillsTimeout);
  }, []);

  return (
    <div className="content-page">
      <div className="left-corner1"></div>
      <div className="right-corner1"></div>
      <div className="name-container-1">
        <div className="name-1">Devesh Jangid</div>
        <div className="designation-1">WEB DEVELOPER_</div>
      </div>

      <div className="skills-box">
        <div className="circle"></div>
        <div className="box-content">
          <div className="box-title-skills">$//192.168.1.1::devesh-jangid/skills.bat</div>
          <Link to="/content" className="circle-2"></Link>
          <div className="box-line-skills"></div>
  
          <div className={`skills-details ${showSkills ? 'fade-in' : ''}`}>
            <h2 className="skills-details">Skills</h2>
            <div className="skills-list">
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Programming Languages:</span> JavaScript, HTML, CSS, Python
              </div> 
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Front-end Development:</span> React, Tailwind CSS, Bootstrap, Material-UI
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Databases:</span> MySQL, MongoDB
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Back-end Development:</span> Node.js, Express.js
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Operating Systems:</span> Windows, Unix, and Linux
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>User Experience (UX):</span> Understanding of UX principles to create intuitive and user-friendly web applications.
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Time Management:</span> Excellent organizational and time management skills to meet project deadlines.
              </div>
              <div className="skill-category">
                <span style={{ fontWeight: 'bold', color: '#31F500' }}>Communication and Teamwork:</span> Effective Communication, Collaborative Problem Solving, Team Collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

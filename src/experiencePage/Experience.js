import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const ExperiencePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnectedAgain, setIsConnectedAgain] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showEchoCurrent, setShowEchoCurrent] = useState(false);

  useEffect(() => {
    // Simulate loading experience.env.. animation
    const loadingTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Simulate connection to db.. animation after 2 seconds
    const connectionTimeout = setTimeout(() => {
      setIsConnected(true);
    }, 2000);
 
    const connectionTimeoutAgain = setTimeout(() => {
      setIsConnectedAgain(true);
    }, 3000);

    // Show paragraph after connection
    const paragraphTimeout = setTimeout(() => {
      setShowParagraph(true);
    }, 5200);
 
    // Show list after paragraph
    const listTimeout = setTimeout(() => {
      setShowList(true);
    }, 3000);

    const echoCurrentTimeout = setTimeout(() => {
        setShowEchoCurrent(true);
      }, 8000); 

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(connectionTimeout);
      clearTimeout(connectionTimeoutAgain);
      clearTimeout(paragraphTimeout);
      clearTimeout(listTimeout); 
      clearTimeout(echoCurrentTimeout);
    };
  }, []);

  return (
    <div className="content-page">
      <div className="left-corner1"></div>
      <div className="right-corner1"></div>
      <div className="name-container-1">
        <div className="name-1">Devesh Jangid</div>
        <div className="designation-1">WEB DEVELOPER_</div>
      </div> 
 
      <div className="education-box">
        <div className="circle"></div>
        <div className="box-content">
          <div className="box-title-experience">$//192.168.1.1::devesh-jangid/experience.bat</div>
          <Link to="/content" className="circle-2"></Link>
          <div className="box-line-experience"></div>

          <div className="experience-details">
          <div className="timeline">
            {isLoaded && <div className="typewriter-text-experience">&gt; loading experience.env..</div>}
            {isConnected && <div className="typewriter-text-experience">&gt; connection to db..</div>}
            {isConnectedAgain && <div className="typewriter-text-experience">&gt; SELECT * from devesh-jangid.experience;</div>}
          </div>
            {showParagraph && (
              <p className="fade-in" >During my internship at <span style={{ fontWeight: 'bold', color: '#31F500', fontSize: '25px' }} >BrownEver</span> in Delhi, India, I served as a dynamic full stack developer. My responsibilities included:</p>
            )}
            {showList && (
              <ul className="terminal-list">
                <li className="fade-in">Developing front-end components using React.js</li>
                <li className="fade-in">Designing and implementing RESTful APIs with Node.js and Express</li>
                <li className="fade-in">Building and maintaining databases using MongoDB</li>
                <li className="fade-in">Collaborating with team members to deliver high-quality software solutions</li>
              </ul>
            )}
            <div className="timeline">
{showEchoCurrent && (
        <div className="typewriter-text-experience">&gt; echo completed</div>
      )}
      </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  // Simulate animation completion after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationDone(true);
    }, 3000);

    // Clean up timeout
    return () => clearTimeout(timeout);
  }, []);

  // Redirect to /content route after animation completion
  useEffect(() => {
    if (animationDone) {
      navigate('/content'); // Use navigate to redirect to the /content route
    }
  }, [animationDone, navigate]);
  
    return ( 
      <div>
        <div className="left-corner"></div>
        <div className="right-corner"></div>
        <div className={`name-container ${animationDone ? 'animate' : ''}`}>
            <div className="name">Devesh Jangid</div>
            <div className="designation">WEB DEVELOPER_</div>
      </div>
      </div>
    );
  };
  
export default LandingPage;
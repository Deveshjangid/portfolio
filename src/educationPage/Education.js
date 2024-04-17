import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

const EducationPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnectedAgain, setIsConnectedAgain] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showEchoCurrent, setShowEchoCurrent] = useState(false);
  const [showCurrentPursuing, setShowCurrentPursuing] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
 
  useEffect(() => {
    // Simulate loading education.env.. animation
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

    const tableTimeout = setTimeout(() => {
      setShowTable(true);
    }, 4500);
 
    const echoCurrentTimeout = setTimeout(() => {
      setShowEchoCurrent(true);
    }, 5000); 

    const currentPursuingTimeout = setTimeout(() => {
      setShowCurrentPursuing(true);
    }, 5500); 

    const completionTimeout = setTimeout(() => {
      setShowCompletion(true);
    }, 6000);

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(connectionTimeout);
      clearTimeout(connectionTimeoutAgain);
      clearTimeout(tableTimeout);
      clearTimeout(echoCurrentTimeout);
      clearTimeout(currentPursuingTimeout);
      clearTimeout(completionTimeout);
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
        <div className="box-content-education">
          <div className="box-title-education">$//192.168.1.1::devesh-jangid/education.bat</div>
          <Link to="/content" className="circle-1"></Link>
          <div className="box-line-education"></div>
          <div className="timeline-education">
            {isLoaded && <div className="typewriter-text-education">&gt; loading education.env..</div>}
            {isConnected && <div className="typewriter-text-education">&gt; connection to db..</div>}
            {isConnectedAgain && <div className="typewriter-text-education">&gt; SELECT * from devesh-jangid.education;</div>}
          </div>
          
          {showTable && (
        <div className="education-table">
          <table>
            <thead>
              <tr>
                <th>Education</th>
                <th>Institute</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                <td>Bachelor of Technology</td>
                <td>Panipat Institute of Engineering and Technology</td>
                <td>2024</td>
              </tr>
              <tr>
                <td>CBSE Class 12th</td>
                <td>ND Ganga School</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>CBSE Class 10th</td>
                <td>ND Ganga School</td>
                <td>2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="timeline-education">
{showEchoCurrent && (
        <div className="typewriter-text-education">&gt; echo current</div>
      )}
      {showCurrentPursuing && (
        <div className="typewriter-text-1-education ">&gt; Currently Pursuing B.Tech at Panipat Institute of Engineering and Technology, Panipat</div>
      )}
      {showCompletion && (
        <div className="typewriter-text-education" >&gt; Completion - <span style={{ color: '#31F500' }}>July, 2024</span></div>
      )}
      </div>
    </div>

        </div>
      </div>
  );
};

export default EducationPage;

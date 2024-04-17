import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isExecutable, setIsExecutable] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);
  const [isExecutedHere, setIsExecutedHere] = useState(false);
  const [isExecutedAgain, setIsExecutedAgain] = useState(false);

  useEffect(() => {
    // Simulate loading contact.env.. animation
    const loadingTimeout = setTimeout(() => {
      setIsLoading(true);
    }, 1000);

    // Simulate executable permission after 2 seconds
    const executableTimeout = setTimeout(() => {
      setIsExecutable(true);
    }, 2200);

    // Simulate execution after 4 seconds
    const executionTimeout = setTimeout(() => {
      setIsExecuted(true);
    }, 3500);

    // Simulate message after 6 seconds
    const messageTimeout = setTimeout(() => {
      setIsExecutedHere(true);
    }, 4200);

    const messageAgainTimeout = setTimeout(() => {
        setIsExecutedAgain(true);
    }, 5500);

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(executableTimeout);
      clearTimeout(executionTimeout);
      clearTimeout(messageTimeout);
      clearTimeout(messageAgainTimeout)
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
 
      <div className="contact-box">
        <div className="circle"></div>
        <div className="box-content-contact">
          <div className="box-title-contact">$//192.168.1.1::devesh-jangid/contact.bat</div>
          <Link to="/content" className="circle-5"></Link>
          <div className="box-line-contact"></div>

          <div className="contact-details">
            <div className="timeline">
              {isLoading && <div className="typewriter-text">&gt; loading Contact.env...</div>}
              {isExecutable && <div className="typewriter-text">&gt; sudo chmod +x Contact</div>}
              {isExecuted && <div className="typewriter-text">&gt; ./Contact</div>}
              {isExecutedHere && <div className="typewriter-text">&gt; Devesh Jangid says...</div>}
            </div>

            <div className="message">
            {isExecutedAgain && (
                <div className="message">
                  <p className="fade-in">Hey there,</p>
                  <p className="fade-in">I hope you liked the page.</p>
                  <p className="fade-in">Feel free to reach out to me at</p>
                  <p className="fade-in emailofContact">Deveshjangidx@gmail.com </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;





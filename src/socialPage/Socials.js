import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Socials.css';

import whatsappIcon from './icons/whatsapp.png';
import linkedinIcon from './icons/linkedin-logo.png';
import emailIcon from './icons/mail.png';

const SocialPage = () => {

  const [isExecutedAgain, setIsExecutedAgain] = useState(false);

  useEffect(() => {
    const messageAgainTimeout = setTimeout(() => {
        setIsExecutedAgain(true);
    }, 1000);

    // Clear timeouts on component unmount
    return () => {
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
        <div className="box-content">
        <div className="box-title-social">$//192.168.1.1::devesh-jangid/socials.bat</div>
        <Link to="/content" className="circle-3"></Link>
          <div className="box-line-socials"></div>
          <div className="box-title-1">
          Connect with Me and Let's Elevate Your Digital Presence Together!
          </div>
          <div className="social-icons">
          <a href="mailto:deveshjangidx@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <img src={emailIcon} alt="Email" className="icon" />
            <div>Email</div>
          </a>
          <a href="whatsapp://send?phone=+91 9694638351" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" className="icon" />
            <div>WhatsApp</div>
          </a>
          <a href="https://www.linkedin.com/in/deveshconnect" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            <div>LinkedIn</div>
          </a>
          </div>

          <div className="message-1">
            {isExecutedAgain && (
                <div className="message-1">
                  <p className="fade-in">Hey there,</p>
                  <p className="fade-in">Get in touch through my social channels.</p>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;

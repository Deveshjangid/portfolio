import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [typedItems, setTypedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen && !showThankYou) {
      const items = [
        "Open-Source Contributions",
        "E-commerce Solutions",
        "Custom Web Applications",
        "SEO optimization",
        "Increase Sales Through Ads Creation"
      ];

      const interval = setInterval(() => {
        setTypedItems(prevItems => [...prevItems, items[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 1000);

      // Clear interval when all items are typed out
      if (currentIndex === items.length) clearInterval(interval);

      return () => clearInterval(interval);
    }
  }, [isModalOpen, showThankYou, currentIndex]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setShowThankYou(false);
    setTypedItems([]);
    setCurrentIndex(0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowThankYou(false);
  };

  const handleOkay = () => {
    setShowThankYou(true);
  };

  return (
    <div className="content-page">
      <div className="left-corner1"></div>
      <div className="right-corner1"></div>
      <div className="name-container-1">
        <div className="name-1">Devesh Jangid</div>
        <div className="designation-1">WEB DEVELOPER_</div>
      </div>

      <div className="project-boxes-container">
      <div className="project-boxes">
        <div className="project-box">
          <h2>Netflix Clone</h2>
          <div className='line-in-project'></div>
          <p>A project showcasing a clone of the Netflix interface.</p>
          <Link to="/netflix-clone" className="link">View Project</Link>
          <a href="#" className="git-button"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />GitHub</a>
        </div>
        <div className="project-box">
          <h2>Amazon Clone</h2>
          <div className='line-in-project'></div>
          <p>A project showcasing a clone of the Amazon e-commerce platform.</p>
          <Link to="/amazon-clone" className="link">View Project</Link>
          <a href="#" className="git-button"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />GitHub</a>
        </div>
        <div className="project-box-1" >
          <h2>More About Works.</h2>
          <p>My Contribution in other projects</p>
          {isModalOpen ? (
            <div className={`modal ${showThankYou ? 'flip-done' : ''}`}>
              {showThankYou ? (
                <div className="thank-you">Thank you! if you want to work with me feel free to contect me. </div>
              ) : (
                <React.Fragment>
                  <ul className='projects-list'>
                    {typedItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <button className="okay-button" onClick={handleOkay}>Okay!</button>
                </React.Fragment>
              )}
            </div>
          ) : (
            <div className="modal-button-container">
              <button className="link-1" onClick={handleOpenModal}>Click to Open</button>
            </div>
          )}
        </div>
      </div> 

      <div className={`back-button ${isModalOpen ? 'modal-open' : ''}`} >
        <Link to="/content" className="back-link">
          <img src="https://img.icons8.com/android/24/ffffff/back.png" alt="Back" />
          Back
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

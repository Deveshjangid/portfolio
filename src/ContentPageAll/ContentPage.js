import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const ContentPage = () => {
  return ( 
    <div className="content-page">
        <div className="left-corner1"></div>
        <div className="right-corner1"></div>
        <div className="name-container-2">
            <div className="name-2">Devesh Jangid</div>
            <div className="designation-2">WEB DEVELOPER_</div>
        </div> 

        <div className="content-wrapper">
        <div className="box-row">
          <div className="box">
            <h2 className="box-title">001</h2>
            <p className="box-subtitle">My Education</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/education">A brief about My Education.</Link></p>
          </div>

          <div className="box">
            <h2 className="box-title">002</h2>
            <p className="box-subtitle">My Experience</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/experience">A brief about My Experience.</Link></p>
          </div>

          <div className="box">
            <h2 className="box-title">003</h2>
            <p className="box-subtitle">My Skills</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/skills">A brief about My Skills.</Link></p>
          </div>
        </div>

        <div className="box-row">
          <div className="box">
            <h2 className="box-title">004</h2>
            <p className="box-subtitle">My Projects</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/projects">A brief about My Projects.</Link></p>
          </div>

          <div className="box">
            <h2 className="box-title">005</h2>
            <p className="box-subtitle">My Social</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/socials">A brief about My Socials.</Link></p>
          </div>

          <div className="box">
            <h2 className="box-title">006</h2>
            <p className="box-subtitle">Contact me</p>
            <div className="box-line-content"></div>
            <p className="box-description"><Link to="/contact">A brief about My Contact.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;


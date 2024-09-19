import React from 'react';
import './App.css';
import profileImage from '../src/profile.jpg'; 
import Facebook from '../src/facebook.png';
import Instagram from '../src/instagram.png';
import Twitter from '../src/twitter.png';
import Linkedin from '../src/linkedin.png';

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <a href='https://nexura.ae' target='blank'>
        <img src={profileImage} alt="Profile" className="profile-image" />
        </a> 
        <h1 className="profile-name">Nexura IT Solution</h1>
        <p className="profile-role">Nexura It Solution, Dubai's hub for innovative software solutions, drives your business success with cutting-edge tech.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61565693772711" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://x.com/nexuraIt" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/nexura.ae/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/nexura.ae/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

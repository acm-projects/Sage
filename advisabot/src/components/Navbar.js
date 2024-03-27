import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import chatImage from '../assets/Wchat.png';
import degpImage from '../assets/Wdegp.png';
import profImage from '../assets/Wprof.png';

const Navbar = () => {
  return (
    <div className="header-container">
      <nav className="navbar">
        <Link to="../" className="navbar-logo">
          advisabot
        </Link>
        <div className="navbar-links">
          <Link to="../chat" className="navbar-icon">
            <img src={chatImage} alt="Chat" />
              Chat
          </Link>
          <Link to="../degreeplan" className="navbar-icon">
            <img src={degpImage} alt="Degree Plan" />
              Degree Plan
          </Link>
          <Link to="../profile-page" className="navbar-icon">
            <img src={profImage} alt="Profile" />
              
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RoundedBack from '../components/RoundedBackground';

const Home = () => {
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const adjustSearchContainerPosition = () => {
      const h1Height = document.querySelector('h1').getBoundingClientRect().height;
      const h1Top = document.querySelector('h1').getBoundingClientRect().top;
      searchContainerRef.current.style.top = (h1Top + h1Height + window.scrollY + window.innerHeight * 0.05) + 'px';
    };

    adjustSearchContainerPosition();

    window.addEventListener('resize', adjustSearchContainerPosition);

    return () => {
      window.removeEventListener('resize', adjustSearchContainerPosition);
    };
  }, []);

  return (
    <div>
        <Navbar />
        <RoundedBack />
      <h1>advisabot</h1>
      <div className="search-container" ref={searchContainerRef}>
        <input type="text" placeholder="  get advisabot advice..." />
        <Link to="/chat">
          <button type="submit"></button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
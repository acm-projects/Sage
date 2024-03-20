// DegreePlan.js
import React from 'react';
import './style.css';

const DegreePlan = () => {
  return (

    <div className='mainDiv'>
      <div className='content'>
        <div className='mainBox'>
          <div className='flexContainer'>
            <div className='allClasses'>
              <p className='specialHeader generalFont'>all classes</p>
              
                <div className='classes'></div>
                <div className='classes'></div>
                <div className='classes'></div>
                <div className='classes'></div>
              
            </div> 
            <div className='semester ' >
              <p className='specialHeader generalFont'>fall 2022</p>
            </div>
            <div className='semester '>
              <p className='specialHeader generalFont'>spring 2023</p>
            </div>
            <div className='semester '>
              <p className='specialHeader generalFont'>fall 2023</p>
            </div>
            <div className='semester '>
              <p className='specialHeader generalFont'>spring 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DegreePlan;

import '../global.css';
import './classes.css';
import React, { useState } from 'react';
import BoxTarget from './BoxTarget';
import Classes from './Classes';

import { useDrop } from 'react-dnd';

const TOOL = 'classes'; // Define the type of draggable item

const Semester = () => {
  

  return (
    <div className='semester'>
      <div className='semseter-header-container'>
        <p className='semesterHeader generalFont'>sem 20XX</p>
      </div>
      
      <BoxTarget/>
    </div>
  );
};

export default Semester;
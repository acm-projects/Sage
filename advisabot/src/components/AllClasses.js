import '../global.css';
import './classes.css';
import Classes from './Classes';

import React from 'react';
import { useDrag } from 'react-dnd';

const TOOL = 'classes'; // Define the type of draggable item

const AllClasses = () => {
  
  
  return (
    <div className='allClasses'>
      <p className='specialHeader generalFont'>all classes</p>
      
    </div>
  );
};

export default AllClasses;
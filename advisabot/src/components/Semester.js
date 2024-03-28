import '../global.css';
import './classes.css';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const TOOL = 'classes'; // Define the type of draggable item

const Semester = () => {
  const [boxes, setBoxes] = useState([]);
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: TOOL, // Accept only classes
    canDrop: () => true,
    drop: item => {
      if (isOverCurrent) {
        setBoxes([...boxes, item]);
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  });

  return (
    <div className={`drop-area ${canDrop ? 'highlight' : ''} semester`} ref={drop}>
      <p className='specialHeader generalFont'>sem 20XX</p>
      {/* Render dropped classes */}
      {boxes.map((item, index) => (
        <div key={index} className='classes'>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Semester;
import '../global.css';
import './classes.css';
import Classes from './Classes';

import React from 'react';
import { useDrag } from 'react-dnd';

const TOOL = 'classes'; // Define the type of draggable item

const AllClasses = () => {
  const classes = [
    {
      name: 'class 1'
    },
    {
      name: 'class 2'
    },
    {
      name: 'class 3'
    }
  ];

  // Tool component representing a draggable item
  const ClassCard = ({ name }) => {
    const [, drag] = useDrag({
      item: {
        type: TOOL,
        name
      }
    });

    return (
      <Classes // Render your existing Classes component
        className="classes" // Apply the necessary className for styling
        innerRef={drag} // Pass the drag ref to your Classes component
        name={name} // Pass other necessary props to your Classes component
      />
    );
  };

  return (
    <div className='allClasses'>
      <p className='specialHeader generalFont'>all classes</p>
      {/* Render draggable ClassCard components */}
      {classes.map(item => (
        <ClassCard key={item.name} name={item.name} />
      ))}
    </div>
  );
};

export default AllClasses;
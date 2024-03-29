import '../global.css';
import './classes.css';
import React from 'react';

import itemTypes from '../utils/itemType';
import { useDrag } from 'react-dnd';

const Classes = () => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD, // Type listed separately
    item: () => ({
      type: itemTypes.CARD,
    }), // Item creation moved outside
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div>
      <div className='classes' ref={drag} >
        helloooo
      </div>
    </div>
  );
};

export default Classes;

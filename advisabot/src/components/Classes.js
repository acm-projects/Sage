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
        <div className='T'>
        </div>
        <p className='classNum generalFont'>CS XXXX</p>
        <p className='classTitle generalFont'>computer science</p>
        <p className='desc generalFont'>this is the description for the class. it will mention pre-requisites and a short description of the class</p>
      </div>
    </div>
  );
};

export default Classes;

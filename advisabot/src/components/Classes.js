import '../global.css';
import './classes.css';
import React from 'react';

import itemTypes from '../utils/itemType';
import { useDrag } from 'react-dnd';

const Classes = () => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: () => ({
      type: itemTypes.CARD,
    }),
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  return (
    <div>
      <div className={`classes ${isDragging ? 'dragging' : ''}`} ref={drag}>
        <p className='classNum generalFont'>CS xxxx</p>
        <div className='TContainer'>
          <div className='TNT'>
            <p className='generalFont TNTtext'>T</p>
          </div>
        </div>
        <p className='classTitle generalFont'>class name</p>
        <p className='desc generalFont truncate'>description, pre requisites, co requisites. if there is other info put it</p>
      </div>
    </div>
  );
};

export default Classes;

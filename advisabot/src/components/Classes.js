import '../global.css';
import './classes.css';
import {useState} from 'react';

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

  const [taken, setTaken] = useState(false);

  //to update based on taken or not
  //if taken, change it to T, and class color should be grey
  //if not taken, change to NT, and class color should be purple
  const checkTaken = () => {
    if(taken === false){
      setTaken(true);
      return 'T';
      
    }

    else{
      setTaken(false);
      return 'NT';
    }
  };
  
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
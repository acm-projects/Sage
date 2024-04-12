import React, { useState } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utils/itemType";
import './classes.css'
import Classes from "./Classes";

const BoxTarget = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => {
          // Remove the class from its initial spot
          removeClassFromInitialSpot(item);
            const newItem = {
                id: droppedItems.length + 1, // Generate a unique ID for the dropped item
                name: item.name, // Store the dropped item's data
            };
          setDroppedItems([...droppedItems, newItem]); // Add the new item to the array
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const removeClassFromInitialSpot = (item) => {
      // Implement the logic to remove the class from its initial spot
      //  may need to update the state to reflect the removal
      // For example, if you're storing classes in an array, you can filter out the dropped class
      // Update the state accordingly
    };

    return (
        <div ref={drop} className={`dropArea ${isOver ? 'drag-over' : ''}`}>
            {droppedItems.map((item, index) => (
                <div key={item.id} className={`droppedItem ${isOver ? 'drag-over-item' : ''}`} style={{ top: index * 20, left: index * 20 }}>
                    <Classes/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default BoxTarget;

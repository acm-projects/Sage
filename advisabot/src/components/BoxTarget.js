import { useDrop } from "react-dnd";
import itemTypes from "../utils/itemType";
import Classes from "./Classes";

const BoxTarget = () => {
    
    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD, // Type listed separately
        drop: (item, monitor) => {

            console.log(item);
            alert("yo you dropped this");
        },
        item: () => ({
          type: itemTypes.CARD,
        }), // Item creation moved outside
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      });
    
    return ( <div ref={drop} >
        Drop here!
    </div> );
}
 
export default BoxTarget;
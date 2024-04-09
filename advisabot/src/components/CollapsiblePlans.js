
import Collapsible, { useCollapse } from 'react-collapsed'
import React from 'react'
import './collapsibleplans.css'


const CollapsiblePlans = () => {

    const{getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {/*{isExpanded ? 'Collapse' : 'saved plans'}*/}
            Saved Plans
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
  );
}

export default CollapsiblePlans


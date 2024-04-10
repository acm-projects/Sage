import { useState } from 'react';
import './collapsibleplans.css';
import whiteStar from '../assets/Wstar.png';

const CollapsiblePlans = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const accordionStyle = {
        maxHeight: isCollapsed ? '0px' : '300px', // Adjust the height as needed
        overflowY: 'auto',
        background: 'white',
        height: '300px',
    };

    return (
        <div>
            <div className='accordion' style={{marginRight:'40px'}}>
                <div className='item' style ={{position:'fixed', bottom: '0px', }}>

                    <div className='savedPlanButton generalFont' onClick={toggleCollapse}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',  }}>
                            <p style={{ fontSize: '30px', textAlign: 'center', letterSpacing: '3px'}}>
                               
                                <img src={whiteStar} alt="whiteStar" className="whiteStar" /> plans
                                
                            </p>
                        </div>
                    </div>

                    <div className='savedCardContainer' style={accordionStyle}>
                        <div className={`savedCard ${isCollapsed ? 'hidden' : ''}`} style={{ background: 'white', marginBottom: '5px', padding: '10px 20px' }}>
                            <p>Option 1</p>
                        </div>
                        <div className={`savedCard ${isCollapsed ? 'hidden' : ''}`} style={{ background: 'white', marginBottom: '5px', padding: '10px 20px' }}>
                            <p>Option 2</p>
                        </div>
                        <div className={`savedCard ${isCollapsed ? 'hidden' : ''}`} style={{ background: 'white', marginBottom: '5px', padding: '10px 20px' }}>
                            <p>Option 1</p>
                        </div>
                        <div className={`savedCard ${isCollapsed ? 'hidden' : ''}`} style={{ background: 'white', marginBottom: '5px', padding: '10px 20px' }}>
                            <p>Option 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollapsiblePlans;

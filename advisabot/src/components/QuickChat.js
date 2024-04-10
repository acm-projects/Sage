import { useState } from 'react';
import './collapsibleplans.css';
import Wchat from '../assets/Wchat.png';

const QuickChat = () => {
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
        <div className='accordion' style={{ marginLeft: '100px' }}>
            <div className='item' style={{ position: 'fixed', bottom: '0px' }}>
                <div className='quickChatButton generalFont' onClick={toggleCollapse}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <img src={Wchat} alt="whiteChat" className="whiteChat" />
                        <p style={{ fontSize: '27px', textAlign: 'center', letterSpacing: '2px', margin: '0', marginLeft: '10px' }}>quick chat</p>
                    </div>
                </div>

                <div className='savedCardContainer' style={accordionStyle}>
                    {/* Content inside the accordion */}
                </div>
            </div>
        </div>
    );
}

export default QuickChat;

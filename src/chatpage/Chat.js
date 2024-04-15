import React from 'react';
import './Chat.css';
import RoundedBack from '../components/RoundedBackground';
import Navbar from '../components/RoundedNavbar';

const Chat = () => {
  return (


    <div className="chat-container">
      <RoundedBack />
      <Navbar />
      <div className="chat-outer">
        <h1></h1>
      </div>
      <div className="text-field">
        <input type="text" placeholder="  get advisabot advice..." />
          <div className="submit-container">
            <button type="submit"></button>
          </div>
          <div className="save-container">
            <button type="save"></button>
          </div>
      </div>
    </div>
  );
}

export default Chat;

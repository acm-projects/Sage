import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-outer">
        <h1></h1>
      </div>
      <div className="text-field">
        <input type="text" placeholder="  get advisabot advice..." />
          <button type="submit"></button>
          <button type="save"></button>
      </div>
    </div>
  );
}

export default Chat;

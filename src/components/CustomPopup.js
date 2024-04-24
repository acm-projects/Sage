import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px;
  z-index: 9999;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const PopupMessage = styled.p`
  margin: 0;
  color: #721c24;
`;

const CustomPopup = ({ message, duration, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  if (!show) {
    return null;
  }

  return (
    <PopupContainer show={show}>
      <PopupMessage>{message}</PopupMessage>
    </PopupContainer>
  );
};

export default CustomPopup;
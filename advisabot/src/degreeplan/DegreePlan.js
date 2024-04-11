import './style.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';
import Header from '../components/Header';
import CollapsiblePlans from '../components/CollapsiblePlans';
import QuickChat from '../components/QuickChat';


import React, { useState } from 'react';

import PopUp from '../components/PopUp';
import whiteStar from '../assets/Wstar.png';
import emptyStar from '../assets/EmptyStar.png';

import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';


const SavedIcon = styled.img`
  display: block; /* Ensure the image is displayed as a block element */
  margin: 0 auto; /* Center the image horizontally */
  width: 40px; 
  height: auto;
`;

const PopUpContainer = styled.div`
  position: relative;
  z-index: 999; /* Set z-index higher than other components */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`;

const Button = styled.button`
  background-color: #0AB28A;
  color: white;
  padding: 13px 150px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-family: 'Sudo Var', sans-serif;
  font-size: 35px;
  letter-spacing: 3px;
  &:hover {
    background-color: #055c47;
  }
`;

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: #0AB28A;
  color: white;
  padding: 8px 10px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-family: 'Sudo Var', sans-serif;
  font-size: 12px;
  margin-left: 15px;
  margin-bottom: 25px;
  margin-top: -5px;
  letter-spacing: 3px;
  &:hover {
    background-color: #055c47;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  padding: 8px 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

function clickMe(){
  alert('you still need to set up the regenerate brother');
}

const DegreePlan = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [popupClosedByX, setPopupClosedByX] = useState(false); // New state variable
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  //const [setStar, setStarImage] = useState(emptyStar);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  //when clicked --> if notSAved (empty star), pull up popup
  //when popup comes up: 
  //1. if submitted --> isSaved is true, star becomes filled, popup closes
  //2. if closedByX --> isSaved is false, star becomes empty, popup closes

  const toggleSaved = () => {
    
    
    if (isSaved === false) {
      // Show the popup only if the star is the empty star
      setShouldShowPopup(true);
      setIsSaved(!isSaved);

      //if closedbyX
      if(popupClosedByX === true){
        setIsSaved(false);
        setPopupClosedByX(true); 
        setShouldShowPopup(false);
      }
      //if submitted
      if(popupSubmitted === true){
        setIsSaved(true);
        popupSubmitted(true);
        setShouldShowPopup(false);
      }
    }

    else{
      setIsSaved(!isSaved);
    }
    
    
  };

  const closePopup = () => {
    setShouldShowPopup(false);
    setPopupClosedByX(true); // Set to true when the popup is closed by clicking X
  };

  const submitPopup = () => {
    setIsSaved(true); // Set the star to be filled
    setShouldShowPopup(false); // Close the popup
    setPopupSubmitted(true);
  };
  
  return (
    <div className='mainDiv'>
      <div className='content'>
        <div className='mainBox'>
          <div className='TContainer'>
            <div className='saved' onClick={toggleSaved}>
              <SavedIcon onClick={() => { if (!isSaved) setShouldShowPopup(true); }} src={ (isSaved) ? whiteStar : emptyStar}
              alt="saved" className='whiteStar' />
            </div>
          </div>
          <div className='flexContainer'>
            <div className='allClasses'>
              <p className=' specialHeader generalFont '>all classes</p>
              <DropdownContainer>
                <DropdownButton onClick={toggleMenu}>filter results</DropdownButton>
                {menuVisible && (
                  <DropdownMenu visible={menuVisible}>
                    <ul>
                      <li>taken</li>
                      <li>not taken</li>
                    </ul>
                  </DropdownMenu>
                )}
              </DropdownContainer>
              <Classes/>
              <Classes/>
              <Classes/>
              <Classes/>
            </div> 
            <div className='flexContainer'>
              <Semester/>
              <Semester/>
              <Semester/>
              <Semester/>
            </div>
            
            <PopUpContainer>
              {shouldShowPopup && <PopUp onClose={closePopup} onSubmit={submitPopup} />}
            </PopUpContainer>
          </div>
        </div>
        <ButtonContainer>
          <Button onClick={clickMe}>regenerate</Button>
        </ButtonContainer>
        <div className='footerPopUp' style={{display: 'flex', justifyContent: 'flex-end', marginRight:'175px'}}>
          <CollapsiblePlans/>
          <QuickChat/>
        </div>
      </div>
    </div>
  );
}

export default DegreePlan;

import './style.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';
import Header from '../components/Header';
import CollapsiblePlans from '../components/CollapsiblePlans';
import React, { useState } from 'react';

import PopUp from '../components/PopUp';
import whiteStar from '../assets/Wstar.png';
import emptyStar from '../assets/EmptyStar.png';

import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';


const SavedIcon = styled.img`
  width: 40px; 
  height: auto; 
  vertical-align: middle;
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
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setPopup] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const toggleSaved = () => {
    setIsSaved(!isSaved);
  }

  return (
    <div className='mainDiv'>
      <div className='content'>
        <div className='mainBox'>
          <div className='TContainer'>
            <div className='saved' onClick={toggleSaved}>
              <SavedIcon onClick={() => setPopup(true)} src={isSaved ? whiteStar : emptyStar} alt="saved" className='whiteStar'/>
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
              {showPopup && <PopUp onClose={() => setPopup(false)} />}
            </PopUpContainer>
          </div>
        </div>
        <ButtonContainer>
          <Button onClick={clickMe}>regenerate</Button>
        </ButtonContainer>
        <div className='savedPlans' style={{ position: 'fixed', left: '800px'}}>
            <CollapsiblePlans/>
        </div>
      </div>
      
      
    </div>
  );
}

export default DegreePlan;

import './style.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';
import Header from '../components/DPNav';
import CollapsiblePlans from '../components/CollapsiblePlans';
import QuickChat from '../components/QuickChat';

import React, { useState, useEffect } from 'react';

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
  margin-top: -10px;
  margin-left: 40px;
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
  padding: 12px 10px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-family: 'Sudo Var', sans-serif;
  font-size: 12px;
  margin-left: 15px;
  margin-top: -20px;
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

  const [classes, setClasses] = useState([]);
  const [semesters, setSemesters] = useState({});

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('https://cczyt46ucfu4bzz4lshj26e7gu0bwqgw.lambda-url.us-west-2.on.aws/');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []); 

  const getDegreePlan = async () => {
    try {
      const response = await fetch('https://55rm2jn7ns6d2yfkznmcuqzfom0gvpdc.lambda-url.us-west-2.on.aws/');
      const data = await response.json();
      setSemesters(data);
    } catch (error) {
      console.error('Error fetching semesters:', error);
    }
  };

  const handleGenerateClick = () => {
    getDegreePlan();
  };

  const handleRemoveFromPreviousSemester = (courseCode, destinationSemesterKey, movedClass) => {
    const updatedSemesters = { ...semesters };
    Object.entries(updatedSemesters).forEach(([semesterKey, semesterClasses]) => {
      if (Array.isArray(semesterClasses)) {
        if (semesterKey !== destinationSemesterKey) {
          console.log('filtering: ' + semesterKey);
          const updatedClasses = semesterClasses.filter((classItem) => classItem.course_code !== courseCode);
          updatedSemesters[semesterKey] = updatedClasses;
        } else {
          // Add the moved class to the destination semester
          updatedSemesters[semesterKey] = [...semesterClasses, movedClass];
        }
      }
    });
    setSemesters(updatedSemesters);
  };

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
                <SavedIcon onClick={() => { if (isSaved === false ) setShouldShowPopup(true); }} src={ (isSaved) ? whiteStar : emptyStar}
                alt="saved" className='whiteStar' />
              </div>
            </div>
            <div className='flexContainer'>
              <div className='allClasses'>
                <p className='specialHeader generalFont'>Taken Classes</p>
                  {classes.map((classData) => (
                    <Classes
                      key={classData.course_code}
                      course_code={classData.course_code}
                      name={classData.name}
                      prerequisites={classData.prerequisites}
                      corequisites={classData.corequisites}
                    />
                  ))}
              </div>
              <div className='flexContainer'>
                {console.log(semesters)}
                {Object.entries(semesters).map(([semesterName, semesterData]) => { //convert semester object into array of key-value pairs
                  const [season, year] = semesterName.split(' ');
                  return (
                    <Semester
                      key={semesterName}
                      season={season}
                      year={year}
                      classes={semesterData}
                      onRemoveFromPreviousSemester={handleRemoveFromPreviousSemester}
                      semesterKey={season + ' ' + year}
                      semesters={semesters}
                    />
                  );
                })}
              </div>
              <PopUpContainer>
                {shouldShowPopup && <PopUp onClose={closePopup} onSubmit={submitPopup} />}
              </PopUpContainer>
            </div>
          </div>
          <ButtonContainer>
            <Button onClick={handleGenerateClick}>Generate</Button>
          </ButtonContainer>
          <div className='footerPopUp' style={{display: 'flex', justifyContent: 'flex-end', marginRight:'175px'}}>
            <CollapsiblePlans/>
            <QuickChat/>
          </div>
          <div style={{maxHeight:'100px'}}></div>
        </div>
      </div>
  );
}

export default DegreePlan;
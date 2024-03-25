// DegreePlan.js
import './style.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';


const ButtonContainer = styled.div`
  display: flex; /* Ensure its children are laid out in a row */
  justify-content: flex-start; /* Align its children to the start (left) of the container */
  margin-left: 20px;
`;
const Button = styled.button`

background-color:#0AB28A;
color: white;
padding: 13px 150px;
border-radius: 20px;
outline: 0;
cursor: pointer;
transition: ease background-color 250ms;
font-family: 'Sudo Var', sans-serif;
font-size: 35px;
letter-spacing: 3px;
&:hover{
  background-color: #055c47;
}


`

function clickMe(){
  alert('you still need to set up the regenerate brother');
}



const DegreePlan = () => {
  return (

    <div className='mainDiv'>
      <div className='content'>
        <div className='mainBox'>
          <div className='flexContainer'>
            <div className='allClasses'>
              <p className='specialHeader generalFont'>all classes</p>
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
            
            
          </div>
        </div>
        <ButtonContainer>
          <Button onClick={clickMe}>regenerate</Button>
        </ButtonContainer>
      </div>
      
    </div>
  );
}

export default DegreePlan;
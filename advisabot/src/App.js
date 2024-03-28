import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DegreePlan from './degreeplan/DegreePlan';
import ProfilePage from './profile-page/ProfilePage';
import ChatPage from './chatpage/ChatPage';
import RoundedBack from './components/RoundedBackground';
import './global.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { render } from 'react-dom'

function App() {

  

 

  return (
    <div>
      
      <Routes>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Route path='/degreeplan' element={<DegreePlan/>}></Route>
        <Route path='/profile-page' element={<ProfilePage/>}></Route>
=======
=======
>>>>>>> Stashed changes
        <Route path='/degreeplan' element={
          <DndProvider backend={HTML5Backend}>
            <DegreePlan/>
          </DndProvider>
        }/>
        <Route path='/profile-page' element={<ProfilePage/>}/>
>>>>>>> Stashed changes
        <Route path='/chatpage' element={<ChatPage/>}/>
        <Route path='/chatpage' element={<ChatPage/>}/>
      </Routes>

    </div>
    
  )
}


export default App;
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
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header/>
        <Routes>
            <Route path='/degreeplan' element={<DegreePlan/>}/>
            <Route path='/profile-page' element={<ProfilePage/>}/>
            <Route path='/chatpage' element={<ChatPage/>}/>
            <Route path='/chatpage' element={<ChatPage/>}/>
          </Routes>
      </div>
    </DndProvider>
    
    
  )
}


export default App;
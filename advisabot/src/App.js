import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DegreePlan from './degreeplan/DegreePlan';
import ProfilePage from './profile-page/ProfilePage';
import ChatPage from './chatpage/ChatPage';
import RoundedBack from './components/RoundedBackground';
import './global.css';



function App() {

  

 

  return (
    <div>
      
      <Routes>
        <Route path='/degreeplan' element={<DegreePlan/>}></Route>
        <Route path='/profile-page' element={<ProfilePage/>}></Route>
        <Route path='/chatpage' element={<ChatPage/>}/>
        <Route path='/chatpage' element={<ChatPage/>}/>
      </Routes>

    </div>
    
  )
}


export default App;
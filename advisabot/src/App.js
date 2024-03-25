import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DegreePlan from './degreeplan/DegreePlan';
import ProfilePage from './profile-page/ProfilePage';
import ChatPage from './chatpage/ChatPage';
import './global.css';



function App() {

  

  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/degreeplan' element={<DegreePlan/>}/>
        <Route path='/profile-page' element={<ProfilePage/>}/>
        <Route path='/chatpage' element={<ChatPage/>}/>
        <Route path='/chatpage' element={<ChatPage/>}/>
      </Routes>

    </div>
    
  )
}


export default App;
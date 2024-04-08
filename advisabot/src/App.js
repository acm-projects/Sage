import Navbar from './components/Navbar';
import Home from './HomePage/Home';
import RoundedBack from './components/RoundedBackground';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './ChatPage/Chat';
import Transcript from './Transcript/Transcript';
import Profile from './Profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <RoundedBack />
        <Navbar />
        <div className = "Content">
          <Switch>
            <Route exact path  ="/">
              <Home />
            </Route>
            <Route path ="/chat">
              <Chat />
            </Route>
            <Route path ="/transcript">
              <Transcript />
            </Route>
            <Route path ="/profile-page">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default App;
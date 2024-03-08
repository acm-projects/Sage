import '../global.css';
import './header.css';

import chatImage from '../assets/Wchat.png';
import degpImage from '../assets/Wdegp.png';
import profImage from '../assets/Wprof.png';


const Header = () => {
  return (
    <div className="header-container">
      
        <nav className="navbar">

          <a href="/chatpage" className=" header-link alternateFont ">advisabot</a>

          <a href="/chatpage" className="header-link generalFont">
            <img src={chatImage} alt="chatWhite" className="chatWhite" />Chat
          </a>
          <a href="/degreeplan" className="header-link generalFont">
            <img src={degpImage} alt="degPWhite" className="degPWhite" />Degree Plan
          </a>

          <a href="/profile-page" className="header-link generalFont">
            <img src={profImage} alt="profileWhite" className="profileWhite" />
          </a>

        </nav>

      
      
    </div>
  );
};

export default Header;

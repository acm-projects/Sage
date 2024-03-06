import '../global.css';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar">

        <a href = "/chatpage" className="header-link alternateFont left">Advisabot</a>
        
        <a href="/chatpage" className="header-link generalFont">
          <img src="advisabot\public\Wchat.png" alt = "chatWhite" className = "chatWhite"/>Chat
        </a>
        <a href="/degreeplan" className="header-link generalFont">
          <img src="advisabot\public\Wdegp.png" alt = "degPWhite" className = "degPWhite"/>Degree Plan
        </a>

        <a href="/profilepage" className="header-link generalFont">
          <img src="advisabot\public\Wprof.png" alt= "profileWhite" className = "profileWhite"/>Profile
        </a>
        
      </nav>
      
    </div>
  );
};

export default Header;

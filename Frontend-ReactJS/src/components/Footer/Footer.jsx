import { Link } from 'react-router-dom';
import GithubIcon from "../../assets/icons/github.png";
import "./footer.css"

/**
 * Component returns footer component.
 * 
 * @returns {React.ReactElement}
 */
function Footer() {

 return (
  <footer className="Footer">
   <ul className="Footer-Nav">
    <li>
     <Link to="/privacy-policy">Privacy Policy</Link>
    </li>
    <li>
     <Link to="/impressum">Impressum</Link>
    </li>
   </ul>
   <div>
    <p>2025 by</p>
    <a href="https://github.com/bgtti" target="_blank" rel="noopener noreferrer">
     <img src={GithubIcon} alt="github repo" />
    </a>
   </div>
  </footer>
 );
};

export default Footer;
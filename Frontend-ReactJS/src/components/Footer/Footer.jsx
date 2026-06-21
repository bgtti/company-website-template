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
   <p className="Footer-Nav">
    <Link to="/privacy-policy">Privacy Policy</Link>

    <span className="Footer-Separator">|</span>

    <Link to="/impressum">Impressum</Link>
   </p>

   <div className="Footer-Copyright">
    {/* <p>© 2026 Company Name. All rights reserved.</p> */}
    <p>2026 by</p>
    <a href="https://github.com/bgtti" target="_blank" rel="noopener noreferrer">
     <img src={GithubIcon} alt="github repo" />
    </a>
   </div>
  </footer>
 );
};

export default Footer;
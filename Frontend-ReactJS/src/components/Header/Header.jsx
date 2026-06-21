import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_NAME } from "../../config_variables.js";
import "./header.css";

/**
 * Component returns nav component.
 * 
 * @returns {React.ReactElement}
 */
function Header() {

 const [menuOpen, setMenuOpen] = useState(false);

 const navLinkClass = ({ isActive }) =>
  isActive ? "NavBar-Link active" : "NavBar-Link";

 const closeMenu = () => {
  setMenuOpen(false);
 };

 return (
  <nav className="NavBar" role="navigation" aria-label="Primary">
   <NavLink to="/" className="NavBar-AppName" onClick={closeMenu}>
    {APP_NAME}
   </NavLink>

   <button
    className={`NavBar-Burger ${menuOpen ? "open" : ""}`}
    type="button"
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
    onClick={() => setMenuOpen(prev => !prev)}
   >
    <span></span>
    <span></span>
    <span></span>
   </button>

   <div className={`NavBar-Menu ${menuOpen ? "open" : ""}`}>
    <ul className="NavBar-Items">
     <li>
      <NavLink className={navLinkClass} to="/" end onClick={closeMenu}>
       Home
      </NavLink>
     </li>
     <li>
      <NavLink className={navLinkClass} to="/what-we-do" onClick={closeMenu}>
       What We Do
      </NavLink>
     </li>
     <li>
      <NavLink className={navLinkClass} to="/about" onClick={closeMenu}>
       About
      </NavLink>
     </li>
     <li>
      <NavLink className={navLinkClass} to="/contact" onClick={closeMenu}>
       Contact
      </NavLink>
     </li>
    </ul>
   </div>
  </nav>
 );
}

export default Header;
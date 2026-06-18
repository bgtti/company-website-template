import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { APP_NAME } from "../../config_variables.js";
import "./header.css"

/**
 * Component returns nav component.
 * 
 * @returns {React.ReactElement}
 */
function Header() {

 return (
  <nav className="NavBar" role="navigation" aria-labelledby="firstLabel" aria-label="Primary">
   <NavLink to="/" className="NavBar-AppName">
    {APP_NAME}
   </NavLink>
   <div>

    <ul className="NavBar-Items">
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/about">About</NavLink></li>
     <li><NavLink to="/contact">Contact</NavLink></li>
     <li><NavLink to="/what-we-do">What We Do</NavLink></li>
    </ul>


   </div>
  </nav>
 );
}

export default Header;
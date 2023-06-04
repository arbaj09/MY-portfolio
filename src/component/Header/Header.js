import React from "react";
import './header.css'
import logo from '../Asset/logo.png'

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    
    <div className="container">

      
      <NavLink to='/'><img src={logo} alt='img' height={87} width={87} className='lol'></img></NavLink>
    
      
      <nav className="navbar">
        <ul className="list">
          <li >
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
          <li>
            <NavLink to='/about'>about</NavLink>
          </li>
          <li>
            <NavLink to='/project'> project</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

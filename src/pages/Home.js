import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";


import "./home.css";
const Home = () => {
  return (
    <Fragment>
    <div className="main">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
          alt="img"
          height={400}
          width={400}
        />
      </div>
      <div className="Main-item">
        <h1>Hi</h1>
        <span>I am </span>
        <h1>arbaj shekh</h1>
        <p>Web developer/React developer</p>
        <div className="control">
           <a href={require('./Arbaz.pdf')} download='Arbaz.pdf' target='_blank'><button className="Btn">Download Resume</button></a>
          <NavLink to='/contact'><button className="Btn">Contact me</button></NavLink>
    
        </div>
      </div>
    </div>
 


    
    </Fragment>
  );
};
export default Home;

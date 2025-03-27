import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import "./style.css";
import logo from "../../assets/Logo.svg";
import cube from "../../assets/cube.svg";
import phoneBlured from "../../assets/phoneBlured.svg";
import phone from "../../assets/phone.svg";
import cubeBlured from "../../assets/cubeBlured.svg";


const Header = () => {
  const navigatePages = useNavigate();
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(location.pathname === '/users');

  useEffect(()=>{
    navigatePages(isChecked?"/users":"/posts");
  },[isChecked,navigatePages])
 

    return(
        <header className="header-vertical">
            <img className="logo" src={logo} alt="Logo" />
            <nav className="nav-bar">
                <input
                type="checkbox"
                id="toggle"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="toggle-switch"
                />
    
                <label 
                  htmlFor="toggle" 
                  className="toggle-container"
                  onMouseEnter={() => setIsChecked(!isChecked)}
                >
                  <span className="icon icon-left">
                    <img src={isChecked ? cubeBlured : cube} alt="Cube" />
                  </span>
                  <div className={`toggle-dot ${isChecked ? "checked" : ""}`}></div>
                  <span className="icon icon-right">
                    <img src={isChecked ? phone : phoneBlured} alt="Phone" />
                  </span>
                </label>
            </nav>
        </header>
    );
};


export default Header;
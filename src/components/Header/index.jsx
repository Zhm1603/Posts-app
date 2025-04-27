import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const Header = () => {
  const navigatePages = useNavigate();
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(location.pathname === "/users");

  useEffect(() => {
    navigatePages(isChecked ? "/users" : "/posts");
  }, [isChecked, navigatePages]);

  const handleToggleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <header className="header-vertical">
      <SvgSelector className="logo" name="logo" />
      <nav className="nav-bar">
        <input
          type="checkbox"
          id="toggle"
          checked={isChecked}
          onChange={handleToggleClick}
          className="toggle-switch"
        />

        <label
          htmlFor="toggle"
          className="toggle-container"
          onClick={handleToggleClick} 
        >
          <span className="icon icon-left">
            <SvgSelector name={isChecked ? "cubeBlured" : "cube"} />
          </span>
          <div className={`toggle-dot ${isChecked ? "checked" : ""}`}></div> 
          <span className="icon icon-right">
            <SvgSelector name={isChecked ? "phone" : "phoneBlured"} />
          </span>
        </label>

        <button className="theme-button">
          <SvgSelector name="themeBtnIcon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;

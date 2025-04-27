import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const Header = () => {
  const navigatePages = useNavigate();
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(location.pathname === "/users");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleThemeButtonClick = () => {
    setIsButtonClicked((prev) => !prev); 
  };

  useEffect(() => {
    navigatePages(isChecked ? "/users" : "/posts");
  }, [isChecked, navigatePages]);

  return (
    <header className="header-vertical">
      <div className="logo">
        <SvgSelector  
          name="logo" />
      </div>
      <nav className="nav-bar">
        <div>
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
        >
          <span className="icon icon-left">
            <SvgSelector name={isChecked ? "cubeBlured" : "cube"} />
          </span>
          <div className={`toggle-dot ${isChecked ? "checked" : ""}`}></div>
          <span className="icon icon-right">
            <SvgSelector name={isChecked ? "phone" : "phoneBlured"} />
          </span>
        </label>

        </div>
        <div className="button-container">
        <button className={`theme-button ${isButtonClicked ? "theme-button-clicked" : ""}`}
          onClick={handleThemeButtonClick}>
          <SvgSelector name={isButtonClicked ? "themeBtnIconDark" :"themeBtnIcon"} />
        </button>

        </div>
      </nav>
    </header>
  );
};

export default Header;

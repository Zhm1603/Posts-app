import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import SvgSelector from "../SvgSelector/SvgSelector";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./style.css";

const Header = () => {
  const navigatePages = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useContext(ThemeContext);
  const [active, setActive] = useState(false);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  
  useEffect(() => {
    navigatePages(active ? "/users" : "/posts");
  }, [active, navigatePages]);

  return (
    <header className="header-vertical">
      <div className="logo">
        <SvgSelector 
          name="logo" />
      </div>
      <nav className="nav-bar">
         <div
      className="toggle-container"
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="cube-container">
        <SvgSelector name={`cube ${active ? "Blured" : ''}`} />
      </div>
      <div className={`toggle-dot ${active ? "active" : ''}`}></div>
      <div className="phone-container">
        <SvgSelector name={`phone ${active ? '' : "Blured"}`} />
      </div>
    </div>
        
        <div className="button-container">
          <button className={`theme-button ${ theme === "dark" ? "theme-button-clicked" : ""}`}
            onClick={changeTheme}>
            <SvgSelector name={theme === "dark" ? "themeBtnIconDark" :"themeBtnIcon"} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

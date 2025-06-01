import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import SvgViewer from "../SvgViewer";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./style.css";

const Header = () => {
  const navigatePages = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleThemeButtonClick = (isButtonClicked) => {
     setButtonClicked(prevState => !prevState);
  }
  // useEffect(() => {
  //   navigatePages(isChecked ? "/users" : "/posts");
  // }, [isChecked, navigatePages]);

  return (
    <header className="header-vertical">
      <div className="logo">
        <SvgViewer  
          id="logo" />
      </div>
      <nav className="nav-bar">

        <label class="toggle">
          <SvgViewer id={"cube"} />
          <input class="toggle-checkbox" type="checkbox" />
          <SvgViewer id={"phone"} />
          <div class="toggle-switch"></div>
        </label>
        <div className="button-container">
          <button className={`theme-button ${isButtonClicked ? "theme-button-clicked" : ""}`}
            onClick={changeTheme}>
            <SvgViewer id={isButtonClicked ? "themeBtnIconDark" :"themeBtnIcon"} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

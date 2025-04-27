import React from "react";
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const Searching = () => {
  const [isInputClicked, setIsInputClicked] = React.useState(false);
  const [searchingUserValue, setSearchingUserValue] = React.useState("");

  const handleInputClick = (e) => {
    e.preventDefault();
    setIsInputClicked(true);
    document.addEventListener("click", deleteListener);
  };

  const deleteListener = (e) => {
    const element = document.querySelector(".search-line");
    if (element && !element.contains(e.target)) {
      setIsInputClicked(false);
      document.removeEventListener("click", deleteListener);
    }
  };

  const handleOnChange = (event) => {
    setSearchingUserValue(event.target.value);
    console.log("Search:", event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-icon-container">
        <SvgSelector name="searchLogo" />
      </div>
      <div className="input-container">
        <input
          className={`search-line ${isInputClicked ? "clicked" : ""}`}
          type="text"
          placeholder="Поиск.."
          name="search"
          value={searchingUserValue}
          onClick={handleInputClick}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Searching;

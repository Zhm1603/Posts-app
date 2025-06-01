import { createContext, useEffect} from "react";
import React from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export const ThemeContext = createContext(); 

export const ThemeProvider = ({children}) => {
    const[theme, setTheme] = UseLocalStorage("theme", "dark");
    useEffect(() => {
        if (theme === "light") document.body.classList.add("light")
        else document.body.classList.remove("light")
},[theme])
    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
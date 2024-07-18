import { useState } from "react";
import { createContext } from "react";

export const themeContext=createContext()

export function ThemeContexProviderFunction({children}){
    const [theme,settheme]=useState("light")
    const themeupdaterfunction=()=>{
        settheme(theme=="light" ? "dark" : "light")
    }
    return(
        <themeContext.Provider value={{theme,themeupdaterfunction}}>{children}</themeContext.Provider>
    )
}   
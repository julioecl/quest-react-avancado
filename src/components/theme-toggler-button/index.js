import React, { useContext } from "react"
import { ButtonDefault } from "../button"
import { ThemeContext, themeDark, themeLight } from "../context/theme.context"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext) 
    
    return (        
        <ButtonDefault onClick={() => setTheme(theme === themeLight ? themeDark : themeLight)}> {theme.label} Mode </ButtonDefault>        
    )
}


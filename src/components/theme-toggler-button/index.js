import React, { useContext } from "react"
import { ButtonDefault } from "../button"
import { ThemeContext, themes } from "../context/theme.context"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext) 

    const handleClick = () => {
        const storageTheme = JSON.parse(localStorage.getItem('themes'))

        setTheme(theme === themes.themeLight ? themes.themeDark : themes.themeLight)

        if (storageTheme) {
            localStorage.setItem('themes', JSON.stringify(storageTheme.label === 'Light' ? themes.themeDark : themes.themeLight))
        } else {
            localStorage.setItem('themes', JSON.stringify(themes.themeLight))
        }
    }     
    
    return (        
        <ButtonDefault onClick={() => handleClick()}> {theme.label} Theme </ButtonDefault>        
    )
}


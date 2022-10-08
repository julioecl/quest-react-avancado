import { createContext, useState } from "react";

export const themeLight = {
    label: 'Light',
    color: '#000000',
    background: '#B6D3E2',
    border: '#000000'
}
export const themeDark = {
    label: 'Dark',
    color: '#ffffff',
    background: '#094D6F',
    border: '#ffffff'
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themeLight)    
    

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}




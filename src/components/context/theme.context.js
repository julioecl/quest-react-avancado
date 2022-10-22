import { createContext, useEffect, useState } from "react";

export const themes = {
  themeLight: {
    label: "Claro",
    color: "#000000",
    background: "#b0b0b0",
    border: "#000000",
  },
  themeDark: {
    label: "Escuro",
    color: "#ffffff",
    background: "#484848",
    border: "#ffffff",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    const storageTheme = JSON.parse(localStorage.getItem("themes"));

    if (!storageTheme) {
      localStorage.setItem("themes", JSON.stringify(themes.themeLight));
      setTheme(themes.themeLight);
    }

    if (storageTheme) {
      if (storageTheme.label === "Claro") {
        localStorage.setItem("themes", JSON.stringify(themes.themeLight));
        setTheme(themes.themeLight);
      }

      if (storageTheme.label === "Escuro") {
        localStorage.setItem("themes", JSON.stringify(themes.themeDark));
        setTheme(themes.themeDark);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};


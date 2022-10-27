import { createContext, useEffect, useState } from "react";

export const themes = {
  themeLight: {
    label: "Light",
    color: "#000000",
    background: "#b0b0b0",
    border: "#000000",
  },
  themeDark: {
    label: "Dark",
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
      if (storageTheme.label === "Light") {
        localStorage.setItem("themes", JSON.stringify(themes.themeLight));
        setTheme(themes.themeLight);
      }

      if (storageTheme.label === "Dark") {
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


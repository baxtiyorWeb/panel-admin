import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light" | "dark",
  setTheme: () => null,
});

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ storageKey, children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

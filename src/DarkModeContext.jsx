import { createContext, useState, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Assuming you're using react-icons

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

export const ThemeIcon = ({ darkMode }) => {
  return darkMode ? <FaMoon /> : <FaSun />;
};

import { useDarkMode } from './DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons library

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />} {/* Use FaSun icon for light mode, and FaMoon icon for dark mode */}
      {darkMode ? ' Light Mode' : ' Dark Mode'}
    </button>
  );
};

export default ToggleButton;

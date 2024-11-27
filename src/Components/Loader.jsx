import { useDarkMode } from '../DarkModeContext'; // Adjust the path as necessary

const Loader = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex justify-center items-center h-[100vh] ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-row gap-4">
        <div className="w-6 h-6 border-4 border-red-600 rounded-md animate-spin"></div>
        <div className="w-8 h-8 border-4 border-red-600 rounded-md animate-spin"></div>
        <div className="w-10 h-10 border-4 border-red-600 rounded-md animate-spin"></div>
      </div>
      {/* Dark mode toggle button */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Loader;

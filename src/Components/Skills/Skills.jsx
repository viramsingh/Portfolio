import React from "react";
import { Language, Frontend, Backend, Tools } from "./AllSkills.jsx";
import { useDarkMode, ThemeIcon } from '../../DarkModeContext'; // Adjust the path as necessary   

const skillComponents = {
  Language,
  Frontend,
  Backend,
  Tools,
};

const Skills = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const data = [
    {
      label: "Language",
    },
    {
      label: "Frontend",
    },
    {
      label: "Backend",
    },
    {
      label: "Tools",
    },
  ];

  return (
    <div className={`pt-5 pb-8 md:py-10 flex flex-col items-center justify-center ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col items-center justify-center py-5">
        <p className=" font-bold text-3xl">Technical Skills</p>
        <div className="h-[2px] w-20 bg-red-600 rounded-full my-1"></div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        {data.map(({ label }) => (
          <div key={label} className="flex flex-col m-1 items-center">
            <div className="flex flex-col items-center">
              <span className="text-xl mt-1">{label}</span>
              <div className="w-16 h-[2px] bg-red-600 rounded-full my-1"></div>
            </div>
            {skillComponents[label] &&
              React.createElement(skillComponents[label])}
          </div>
        ))}
      </div>

      {/* Theme toggle button with icons */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Skills;


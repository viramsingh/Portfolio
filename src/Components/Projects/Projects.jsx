import { useDarkMode, ThemeIcon } from "../../DarkModeContext"; // Import ThemeIcon
import MernProjects from "./MernProjects";

const Projects = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const data = [
    {
      value: "Projects",
      desc: <MernProjects />,
    },
  ];

  return (
    <div
      className={` pt-5 pb-10 flex flex-col justify-center items-center px-3 ${
        darkMode ? "dark" : ""
      }`}
    >
      <p className="text-center font-bold text-3xl mt-6">Projects</p>
      <div className="h-[2px] w-28 bg-red-600 hover:bg-purple-700 rounded-full my-1 mx-auto mb-10"></div>

      {/* Dark mode toggle button */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} /> {/* Use ThemeIcon component */}
      </button>

      {data.map(({ value, desc }) => (
        <div key={value} className="mb-20">
          {desc}
        </div>
      ))}
    </div>
  );
};

export default Projects;

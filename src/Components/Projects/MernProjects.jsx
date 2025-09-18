import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { useDarkMode } from "../../DarkModeContext"; // Adjust the path as necessary
import { MernProjectData } from "./ProjectData";

const ProjectCard = ({ title, img, live, github, techstack }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col gap-4 bg-${
        darkMode ? "gray-900" : "gray-50"
      } drop-shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl`}
    >
      <div className="relative group">
        <img alt="Project" className="h-48 w-full object-cover" src={img} />
        <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out bg-gray-800 bg-opacity-70 flex items-center justify-center gap-4">
          <Link
            to={live}
            target="_blank"
            className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center"
            aria-label="Live Demo"
          >
            <BiLinkExternal size={24} />
          </Link>

          {github && (
            <Link
              to={github}
              target="_blank"
              className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
          )}
        </div>
      </div>

      <div className={`p-4 ${darkMode ? "text-white" : "text-black"}`}>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <p className="text-sm text-gray-500 mt-2 text-center">
          <span className="font-medium">Tech Stack: </span>
          {techstack}
        </p>
      </div>
    </div>
  );
};

const MernProjects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {MernProjectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MernProjects;

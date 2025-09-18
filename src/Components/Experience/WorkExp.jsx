import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useDarkMode } from "../../DarkModeContext";

import Quality_Webs from "../../assets/QW.png";
import CFTImage from "../../assets/cf.jpeg";

const WorkExp = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`max-w-[60rem] flex justify-center items-center mx-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 border  bg-white hover:scale-105 duration-200">
              <a
                href="https://qualitywebs.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar size="lg" src={Quality_Webs} alt="brainowls" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Quality Webs. - Indore
              </Typography>
              <Typography className=" my-2" color={darkMode ? "white" : "gray"}>
                <span style={{ fontWeight: "bold" }}>
                  Web Development Internship
                </span>{" "}
                <br /> June 2023 - Sept 2023
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul
              className={`list-disc font-sans ml-5 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <li>
                Developed and maintained responsive websites using HTML, CSS,
                JavaScript, React.js, PHP, MySQL, and WordPress at Quality Webs.
              </li>
              <li>
                Collaborated with team members to implement new features,
                improve user experience, and optimize website performance.
              </li>
              <li>
                Designed and built user-friendly interfaces with a focus on
                functionality and responsiveness.
              </li>
              <li>
                Assisted in debugging and resolving issues to ensure
                high-quality, efficient code delivery.
              </li>
              <li>
                Utilized version control systems like Git and GitHub to manage
                codebases and streamline development workflows.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://www.codesfortomorrow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar size="lg" src={CFTImage} alt="Codes For Tommorow" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Codes For Tomorrow - Indore
              </Typography>
              <Typography className=" my-2" color={darkMode ? "white" : "gray"}>
                <span style={{ fontWeight: "bold" }}>
                  React Js Developer Internship
                </span>{" "}
                <br /> May 2024 - August 2024{" "}
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul
              className={`list-disc font-sans ml-5 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <li>
                Assisted in developing responsive user interfaces using
                React.js, HTML5, CSS3, and JavaScript (ES6+).
              </li>
              <li>
                Contributed to building reusable components and learned best
                practices for writing clean and maintainable code.
              </li>
              <li>
                Collaborated with senior developers to integrate RESTful APIs
                and handle dynamic data within applications.
              </li>
              <li>
                Gained hands-on experience with React Hooks and state management
                tools like Redux Toolkit and Context API.
              </li>
              <li>
                Supported debugging and bug-fixing efforts, improving
                application stability and performance.
              </li>
              <li>
                Worked with UI frameworks like Bootstrap, Tailwind CSS, and
                Material-UI to design user-friendly layouts.
              </li>
              <li>
                Learned agile development practices, participated in code
                reviews, and improved problem-solving skills through real
                project exposure.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://www.codesfortomorrow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar size="lg" src={CFTImage} alt="Codes For Tommorow" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Codes For Tomorrow - Indore
              </Typography>
              <Typography className=" my-2" color={darkMode ? "white" : "gray"}>
                <span style={{ fontWeight: "bold" }}>React Js Developer</span>{" "}
                <br /> Augutst 2024 - August 2025{" "}
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul
              className={`list-disc font-sans ml-5 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <li>
                Designed and implemented modern, responsive user interfaces
                using React.js, CSS frameworks (e.g., Bootstrap, Material-UI),
                and advanced JavaScript ES6+ features.
              </li>
              <li>
                Focused on creating reusable and modular components to maintain
                consistency and improve development efficiency.
              </li>
              <li>
                Integrated RESTful APIs into React applications to fetch and
                display real-time data dynamically.
              </li>
              <li>
                Improved performance by optimizing state management using React
                Hooks and libraries like Redux.
              </li>
              <li>
                Worked closely with senior developers to implement best
                practices for component lifecycle management and data handling.
              </li>
              <li>
                Resolved bugs and performance bottlenecks by profiling and
                debugging React applications, ensuring a smooth user experience.
              </li>
              <li>
                Explored and implemented modern design principles to make
                applications visually appealing and intuitive for users.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;

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
                <br /> June'2023 - Sept'2023
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
                <span style={{ fontWeight: "bold" }}>React Js Developer</span>{" "}
                <br /> Spet 2024 - Persent{" "}
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
        {/* 
        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://www.droliafresh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar size="lg" src={DroliaFreshImage} alt="droliafresh" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                DroliaFresh - Patna
              </Typography>
              <Typography className=" my-2" color={darkMode ? "white" : "gray"}>
                <span style={{ fontWeight: "bold" }}>Web Developer Intern</span>{" "}
                <br /> May'2023 - Jul'2023
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
                Crafted the organization's website, boosting traffic by 25% and
                user engagement by 10% after launch.
              </li>
              <li>
                Produced captivating social and graphic content, boosting
                engagement by 40%, expanding reach by 15%, and elevating brand
                recognition by 25%, with a 10% increase in campaign conversions.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
};

export default WorkExp;

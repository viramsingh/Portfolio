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
import DegreeImage from "../../assets/degree.jpeg";
import HssImage from "../../assets/hss.jpeg";
import HsImage from "../../assets/hss.jpeg";

const Education = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`max-w-[40rem] flex justify-center items-center mx-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <div
        className={`pb-16 lg:py-25 max-w-[40rem] min-h-screen justify-center items-center ${
          darkMode ? "dark" : ""
        }`}
      >
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a
                  href="https://web.mitsgwalior.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size="lg" src={DegreeImage} alt="Degree" />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Mandsaur University , Mandsaur
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-14">
              <Typography
                color={darkMode ? "white" : "gray"}
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                Bachelor of Computer Applications (BCA) -
                <br />
                Information Technology, <br /> 2021 - 2024
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a
                  href="https://www.polygwalior.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size="lg" src={HssImage} alt="Diploma" />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Govt. High Secondary School, Kanghatti, Mandsaur
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-14">
              <Typography
                color={darkMode ? "white" : "gray"}
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                High Secondary School - 12th
                <br /> 2020 - 2021
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineHeader>
              <TimelineConnector />
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a
                  href="https://www.stmarys.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size="lg" src={HsImage} alt="School" />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Gyan Sarovar H.S. School, Jeeran, Neemuch
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                color={darkMode ? "white" : "gray"}
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                High School - 10th <br /> 2019 - 2020
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;

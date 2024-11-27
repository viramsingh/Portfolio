import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { HiAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import WorkExp from "./WorkExp";
import Education from "./Education";
import { useDarkMode, ThemeIcon } from "../../DarkModeContext"; // Adjust the path as necessary

const data = [
  {
    label: "Work Experience",
    value: "Work Experience",
    icon: <HiOutlineBriefcase />,
    desc: <WorkExp />,
  },
  {
    label: "Education",
    value: "Education",
    icon: <HiAcademicCap />,
    desc: <Education />,
  },
];

const Experience = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`pt-2 flex flex-col items-center justify-center ${darkMode ? 'dark' : ''}`}>
      <Tabs
        value={data[0].value}
        className="w-full flex items-center flex-col px-5 py-10"
      >
        <TabsHeader className="w-96 flex items-center mb-5 drop-shadow-2xl">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {icon} {/* Render the icon directly here */}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex justify-center">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {darkMode ? 
                React.cloneElement(desc, { className: 'dark' }) : 
                desc
              }
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {/* Dark mode toggle button */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Experience;

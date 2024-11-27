// import { FaHome, FaLaptopCode, FaReact } from "react-icons/fa";
// import { MdEmail, MdPersonOutline } from "react-icons/md";
// import { HiOutlineBriefcase } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { useDarkMode } from "../DarkModeContext"; // Adjust the path as necessary

// const Data = [
//   {
//     label: "Home",
//     value: "Home",
//     icon: FaHome,
//     desc: "Home",
//     src: "/",
//   },
//   {
//     label: "About",
//     value: "About",
//     icon: MdPersonOutline,
//     desc: "About",
//     src: "/about",
//   },
//   {
//     label: "Skills",
//     value: "Skills",
//     icon: FaLaptopCode,
//     desc: "Skills",
//     src: "/skills",
//   },
//   {
//     label: "Projects",
//     value: "Projects",
//     icon: FaReact,
//     desc: "Projects",
//     src: "/projects",
//   },
//   {
//     label: "Experience",
//     value: "Experience",
//     icon: HiOutlineBriefcase,
//     desc: "Experience",
//     src: "/experience",
//   },
//   {
//     label: "Contact",
//     value: "Contact",
//     icon: MdEmail,
//     desc: "Contact",
//     src: "/contact",
//   },
// ];

// const Navigation = () => {
//   const { darkMode } = useDarkMode();
//   const bgColor = darkMode ? "bg-gray-800" : "bg-white";
//   const textColor = darkMode ? "text-white" : "text-gray-900";

//   return (
//     <section className="fixed bottom-0 w-full xl:bottom-10 lg:flex justify-center items-center z-50">
//       <div className={`border border-red-200 py-2 flex justify-center z-50 md:gap-1 shadow-xl ${bgColor}`}>
//         {Data.map(({ label, value, icon: Icon, src }) => (
//           <Link to={src} key={value}>
//             <div className="group relative px-3 cursor-pointer">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full hover:text-red-600">
//                 <Icon className="text-xl" style={{ color: darkMode ? "white" : "black" }} />
//               </div>
//               <span className={`absolute -top-7 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 px-2 py-1 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 ${bgColor} ${textColor}`}>
//                 {label}
//               </span>

//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Navigation;


import { FaHome, FaLaptopCode, FaReact } from "react-icons/fa";
import { MdEmail, MdPersonOutline } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext"; // Adjust the path as necessary

const Data = [
  {
    label: "Home",
    value: "Home",
    icon: FaHome,
    desc: "Home",
    src: "/",
  },
  {
    label: "About",
    value: "About",
    icon: MdPersonOutline,
    desc: "About",
    src: "/about",
  },
  {
    label: "Skills",
    value: "Skills",
    icon: FaLaptopCode,
    desc: "Skills",
    src: "/skills",
  },
  {
    label: "Projects",
    value: "Projects",
    icon: FaReact,
    desc: "Projects",
    src: "/projects",
  },
  {
    label: "Experience",
    value: "Experience",
    icon: HiOutlineBriefcase,
    desc: "Experience",
    src: "/experience",
  },
  {
    label: "Contact",
    value: "Contact",
    icon: MdEmail,
    desc: "Contact",
    src: "/contact",
  },
];

const Navigation = () => {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-900";

  return (
    <section className="fixed bottom-0 left-0 right-0 w-full xl:bottom-10 lg:flex justify-center items-end z-50">
      <div className={`py-2 flex justify-center z-50 md:gap-1 shadow-xl ${bgColor} rounded-full`}>
        {Data.map(({ label, value, icon: Icon, src }) => (
          <Link to={src} key={value}>
            <div className="group relative px-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-full">
                <Icon className={`text-xl hover:text-red-600 ${darkMode ? 'text-white' : 'text-black'}`} />
              </div>
              <span className={`absolute -top-7 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 rounded-lg border border-gray-300 px-2 py-1 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 ${bgColor} ${textColor}`}>
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Navigation;







import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useDarkMode, ThemeIcon } from "../DarkModeContext"; // Adjust the path as necessary
import PPic from "../assets/vss.jpg";
import IndianFlag from "../assets/indian.jpg"; // Adjust the path to the PNG file

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`pb-16 lg:py-25 min-h-screen flex items-center flex-col-reverse lg:flex-row gap-1 justify-center ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="flex flex-col gap-2 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
        <p className="text-2xl font-bold text-red-600">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative">
          I&apos;m
          <span className="text-red-600 ml-4 uppercase">Viram Singh</span>
        </p>
        <p className="text-xl font-semibold relative uppercase">
          Frontend Engineer
        </p>
        <p className="text-lg md:text-xl font-medium relative">
          I&apos;m a Frontend Engineer with{" "}
          <span className="font-semibold">1 year of experience</span>{" "}
          specializing in React.js, based in{" "}
          <span className="inline-flex items-center">
            <img src={IndianFlag} alt="Indian Flag" className="h-3 w-auto" />
            INDIA
          </span>
          . I build modern, responsive, and user-friendly web applications using{" "}
          <b>HTML</b>, <b>CSS</b>, <b>JavaScript (ES6+)</b>, and <b>React.js</b>
          . I focus on clean code, reusable components, and optimized
          performance to deliver seamless digital experiences. Staying updated
          with the latest frontend trends, I bridge design and functionality to
          craft impactful solutions.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6">
          <Link to="/about">
            <Button
              variant="gradient"
              color="red"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Emskv42XhihOyWmM5ejQxcVf3NOCLJ6C/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="gradient"
              color="red"
              className="flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <img
            src={PPic}
            alt="Viram Singh"
            className="rounded-full mt-5 md:mt-3 w-56 h-56 md:w-72 md:h-72 object-cover object-center shadow-lg"
          />
        </div>

        <div className="flex items-center gap-4 md:gap-2 mt-4 ">
          <a
            href="https://www.linkedin.com/in/viram-singh-sisodiya-2730aa225/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-blue-800 text-2xl md:text-2xl " />
          </a>
          <a
            href="https://github.com/viramsingh/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-gray-600 text-2xl md:text-2xl" />
          </a>
          <a href="mailto:viramsinghsisodiya7@gmail.com">
            <MdEmail className="text-purple-400 text-2xl md:text-2xl" />
          </a>
          <a href="https://wa.me/9131892828/" target="_blank" rel="noreferrer">
            <FaWhatsapp
              title="whatsapp"
              className="text-pink-400 text-2xl md:text-2xl"
            />
          </a>
          <a
            href="https://x.com/ViramSingh1111"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="text-blue-500 text-2xl md:text-2xl" />
          </a>
        </div>
      </div>

      {/* Dark mode toggle button with theme icons */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Hero;

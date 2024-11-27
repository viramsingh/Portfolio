import { useDarkMode, ThemeIcon } from "../DarkModeContext";

const About = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`pb-16 lg:py-25 min-h-screen flex items-center flex-col-reverse lg:flex-row gap-1 justify-center ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="text-justify p-10 md:w-7/12">
        <p className="text-center font-bold text-3xl">About Me</p>
        <div className="h-[2px] w-20 bg-red-600 rounded-full my-1 mx-auto mb-10"></div>

        <p
          className={`text-lg md:text-xl ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Hello! I’m <span className="font-semibold">Viram Singh</span>, a
          passionate and dedicated{" "}
          <span className="font-semibold">Frontend Developer</span> and{" "}
          <span className="font-semibold">Full Stack Developer</span> based in
          India. I specialize in creating dynamic, responsive, and user-centric
          web applications that bring ideas to life. With expertise in{" "}
          <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>,{" "}
          <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>, I focus on
          building intuitive, visually appealing, and highly functional digital
          experiences.
          <br />
          <br />
          As a <span className="font-semibold">Frontend Developer</span>, I take
          pride in crafting pixel-perfect designs and seamless user interfaces
          that provide exceptional user experiences. My strong foundation in
          modern frontend technologies ensures that every project I deliver is
          optimized, interactive, and aligned with industry best practices.
          <br />
          <br />
          My journey into web development is fueled by my love for
          problem-solving and innovation. Whether it's designing intuitive user
          interfaces, optimizing performance, or ensuring cross-platform
          compatibility, I approach every challenge with creativity, attention
          to detail, and a commitment to delivering high-quality results.
          <br />
          <br />
          In addition to my technical skills, I am continuously learning and
          staying updated with the latest technologies and trends to ensure my
          work is modern and impactful. Collaboration is at the core of my work
          ethic, and I thrive in team environments where I can contribute my
          expertise to meaningful projects.
          <br />
          <br />
          Beyond coding, I enjoy exploring new tools, sharpening my skills, and
          sharing knowledge with the developer community. My ultimate goal is to
          create memorable digital experiences that not only meet but exceed
          user expectations.
        </p>
      </div>

      {/* Theme toggle button */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default About;

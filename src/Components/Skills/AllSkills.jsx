import { LanguageSkills, FrontendSkills, BackendSkills, ToolSkills } from "./SkillsData";

function SkillCategory({ skills }) {
  return (
    <div className="my-2 flex flex-wrap gap-4 md:w-[800px] pt-2 pb-10 justify-center">
      {skills.map((skill, index) => (
        <div key={index}>
          <h1 className="p-2 flex justify-center items-center gap-2 bg-white rounded-md bg-opacity-30 backdrop-blur-md ">
            <img src={skill?.icon} alt={skill?.name} className="w-8" />
            {skill?.name}
          </h1>
        </div>
      ))}
    </div>
  );
}

export function Language() {
  return <SkillCategory skills={LanguageSkills} />;
}

export function Frontend() {
  return <SkillCategory skills={FrontendSkills} />;
}

export function Backend() {
  return <SkillCategory skills={BackendSkills} />;
}

export function Tools() {
  return <SkillCategory skills={ToolSkills} />;
}

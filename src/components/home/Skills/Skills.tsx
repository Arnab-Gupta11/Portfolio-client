import { skills } from "@/data/SkillData";
import SkillsBox from "./SkillsBox";
import Heading from "@/components/shared/Heading/Heading";

const Skills = () => {
  return (
    <div className="bg-[#F4F8FB] dark:bg-[#0A101E] min-h-screen py-28" id="skill">
      <div className="max-w-screen-lg mx-auto">
        <Heading title="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-14 mx-5 lg:mx-0 gap-5">
          {skills.map((skill) => (
            <SkillsBox key={skill.label} skill={skill}></SkillsBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

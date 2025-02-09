/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import SkillBar from "../Skillss/SkillBar";
type TSkill = {
  label: string;
  icon: any;
  progress: number;
};

const SkillsBox = ({ skill }: { skill: TSkill }) => {
  const { label, icon, progress } = skill;
  return (
    <div className="hover:shadow-primary hover:shadow-lg hover:text-primary px-5 py-4 text-center flex flex-col justify-center bg-[#f7fbfe] dark:bg-[#101624] shadow-md hover:scale-125 hover:transition-all hover:duration-500 cursor-pointer rounded-lg">
      <div className="space-y-3">
        <Image width={50} height={50} className="mx-auto" src={icon} alt="" />
        <h3 className="font-medium text-sm text-light-primary-txt dark:text-dark-primary-txt">{label}</h3>
        <SkillBar percentage={progress} />
      </div>
    </div>
  );
};

export default SkillsBox;

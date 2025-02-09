// import SkillBar from "./SkillBar";

import CircularProgress from "./CircularSkill";

// const Skills = () => {
//   return (
//     <div className="max-w-lg mx-auto space-y-4">
//       <SkillBar skill="React" percentage={85} color="#61DAFB" />
//       <SkillBar skill="JavaScript" percentage={90} color="#F7DF1E" />
//       <SkillBar skill="Node.js" percentage={75} color="#339933" />
//       <SkillBar skill="MongoDB" percentage={80} color="#47A248" />
//       <SkillBar skill="CSS" percentage={70} color="#264DE4" />
//     </div>
//   );
// };

// export default Skills;

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <CircularProgress percentage={85} size={120} color="#61DAFB" /> {/* React */}
      <CircularProgress percentage={90} size={120} color="#F7DF1E" /> {/* JavaScript */}
      <CircularProgress percentage={75} size={120} color="#339933" /> {/* Node.js */}
      <CircularProgress percentage={80} size={120} color="#47A248" /> {/* MongoDB */}
    </div>
  );
};

export default Skills;

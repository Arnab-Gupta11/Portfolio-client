"use client";
import { motion } from "framer-motion";

interface SkillBarProps {
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ percentage }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-2">
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "#9747FF" }}
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <span className="text-sm font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillBar;

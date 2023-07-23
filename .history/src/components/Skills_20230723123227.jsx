import React from "react";
import { motion } from "framer-motion";

const Skill = (name, x, y) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  p-5 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-[70px] w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  p-5 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS/TailwindCSS" x="-5vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-[70px] w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  p-5 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
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
          Web and Mobile
        </motion.div>

        <Skill name="HTML/CSS/TailwindCSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript/TypeScript" x="-20vw" y="2vw" />
        <Skill name="Java/Kotlin" x="20vw" y="6vw" />
        <Skill name="Dart/Flutter" x="0vw" y="12vw" />
        <Skill name="SpringBoot" x="-20vw" y="-15vw" />
        <Skill name="Node.js/Express.js" x="15vw" y="-12vw" />
        <Skill name="React.js/Next.js/Vue.js" x="-5vw" y="-20vw" />
        <Skill name="Python/FastAPI" x="32vw" y="-5vw" />
        <Skill name="JetPack Compose" x="0vw" y="20vw" />
        <Skill name="MongoDB/MariaDB/PostresSQL" x="-15vw" y="10vw" />
        <Skill name="Git/GitHub" x="35vw" y="-10vw" />
        <Skill name="Bash/Docker/Virtualmin" x="30vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;

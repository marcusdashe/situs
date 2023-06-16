"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center 
        justify-center rounded-full text-2xl font-bold hover
      "
        whileHover={{
          scale: 1.5,
          transition: {
            duration: 0.2,
          },
        }}
      >
        Marcus Dashe
      </MotionLink>
    </div>
  );
};

export default Logo;

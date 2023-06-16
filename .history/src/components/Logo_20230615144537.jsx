import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <MotionLink className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="
      w-16 h-16 bg-dark text-light
      flex items-center justify-center rounded-full text-2xl font-bold hover
      "
        // whileHover={{ scale: 1.5 }}
      >
        Marcus Dashe
      </Link>
    </MotionLink>
  );
};

export default Logo;

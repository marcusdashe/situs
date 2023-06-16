import React from "react";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ">
      <h1>{text}</h1>
    </div>
  );
};

export default AnimatedText;

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-20">
      <h2 className="font-bold text-5xl mb-20 w-full text-center">
        {" "}
        Experience
      </h2>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[2px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Developer"
            companyLink="https://www.cstemp.org"
            company="C-STEMP LTD/Gtee"
            time="2020-Present"
            address="Elijah House, 3 Abbey Street, after NYSC Bus Stop, Along Kubwa Express Way. Bwari District, Abuja, Nigeria"
            work="As a versatile software developer, my work entails building websites and platforms, implementing new features, and resolving bugs. I also manage Virtual Private Servers for seamless operations and ensure domain renewals for uninterrupted website availability. Additionally, I maintain and troubleshoot mail servers to facilitate efficient communication. 
                            Furthermore, I actively contribute to digital skills training, helping others enhance their proficiency in various digital technologies."
          />

          <Details
            position="Junior Software Developer"
            companyLink="#"
            company="M-TECH Institute"
            time="2018-2020"
            address="7 Takori Street Gada Biyu, Gusau, Zamfara State, Nigeria"
            work="As a software developer, my role revolves around constructing client-oriented software solutions, 
                        resolving software-related challenges, overseeing client installations, and coordinating training activities at the center."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

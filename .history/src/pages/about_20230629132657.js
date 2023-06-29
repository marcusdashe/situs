import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title> Marcus Dashe | About Page</title>
        <meta name="description" content="About Marcus Dashe" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <AnimatedText text="Passion Fuels Purpose!" />
      </main>
    </>
  );
};

export default About;

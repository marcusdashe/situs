import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
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
        <Layout>
          <AnimatedText text="Passion Fuels Purpose!" />
        </Layout>
      </main>
    </>
  );
};

export default About;

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
        <Layout className="pt-15">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;

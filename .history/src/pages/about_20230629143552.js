import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";

import profilePic from "../../public/images/profile/developer-pic-3.png";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(second);
  return <span ref={ref}></span>;
};
const About = () => {
  return (
    <>
      <Head>
        <title> Marcus Dashe | About Page</title>
        <meta name="description" content="About Marcus Dashe" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-15">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-14" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-full border-2 border-solid border-dark bg-light p-8">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" /> */}
              <Image
                src={profilePic}
                alt="MarcusDashe"
                className="w-full h-auto rounded-full"
              />
            </div>

            <div className="col-span-2 flex flex-col items-center justify-around">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl">12+</span>
                <h2 className="text-[1.1rem] font-medium text-primaryDark">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl">8+</span>
                <h2 className="text-[1.1rem] font-medium text-primaryDark">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl">5+</span>
                <h2 className="text-[1.1rem] font-medium text-primaryDark">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;

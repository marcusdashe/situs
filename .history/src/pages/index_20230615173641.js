import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-4.png";
import AnimatedText from "../components/AnimatedText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcus Dashe | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className=" w-full flex items-center justify-between">
            <div className="w-2/5">
              <Image
                src={profilePic}
                alt="Marcus Dashe"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <h1>
                Transforming Ideas into Tangible Reality Through Digital
                Innovation
              </h1>
              <AnimatedText />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web and mobile applications. Explore my
                latest projects and articles, showcasing my expertise in
                React.js/Next.js, Springboot Webservices and Mobile App
                development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

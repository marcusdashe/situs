import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-1 border-solid border-primaryDark font-medium text-sm ">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Built with{" "}
          <span className="text-primaryDark text-2xl px-1">&hearts</span>
          &hearts; <Link href="/">Hydra Lab</Link>
        </div>
        <Link href="/"></Link>
      </Layout>
    </footer>
  );
};

export default Footer;

import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-primaryDark font-medium text-lg ">
      <Layout>
        <span>Rights</span>
        <Link href="/">Marcus</Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;

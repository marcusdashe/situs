import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return <Link href={href}>{title}</Link>;
};

const Navbar = () => {
  return (
    <header
      className="w-full px-32 py-8 font-medium 
            flex items-center justify-between"
    >
      <nav>
        <CustomLink href="/" title={"Home"} />
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>

      <nav>
        <Link href="https://www.twitter.com/marcusdashe" target={"_blank"}>
          Twitter
        </Link>
        <Link href="https://www.linkedin.com/marcusdashe" target={"_blank"}>
          Linkedin
        </Link>
        <Link href="https://www.github.com/marcusdashe" target={"_blank"}>
          GitHub
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

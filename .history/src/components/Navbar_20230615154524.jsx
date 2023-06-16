import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header
      className="w-full px-32 py-8 font-medium 
            flex items-center justify-between"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
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

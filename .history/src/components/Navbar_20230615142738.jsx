import React from "react";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center ">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <h2>Logo</h2>

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
    </header>
  );
};

export default Navbar;

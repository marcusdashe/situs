import "@/styles/globals.css";
import Head from "next/head";
// import { IBM_Plex_Sans } from "next/font/google";

// const ibm = IBM_Plex_Sans({
//   subsets: ["latin"],
//   variable: "--font-mont",
// });

export default function App({ Component, pageProps }) {
  return (
    <main className={``}>
      <Component {...pageProps} />
    </main>
  );
}

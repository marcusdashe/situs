import "@/styles/globals.css";
import Head from "next/head";
// import { IBM_Plex_Sans } from "next/font/google";

// const ibm = IBM_Plex_Sans({
//   subsets: ["latin"],
//   variable: "--font-mont",
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <main className={`  bg-dark w-full min-h-screen`}>
          <Component {...pageProps} />
        </main>
      </Head>
    </>
  );
}

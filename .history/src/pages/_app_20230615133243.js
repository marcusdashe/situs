import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${ibm.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  );
}

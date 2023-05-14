import "@/styles/globals.css";
import Navbar from "@/components/surfaces/Navbar";
import type { AppProps } from "next/app";
import Footer from "@/components/surfaces/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

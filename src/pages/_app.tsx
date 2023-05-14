import "@/styles/globals.css";
import Navbar from "@/components/surfaces/Navbar";
import type { AppProps } from "next/app";
import { useContext } from "react";
import Footer from "@/components/surfaces/Footer";
import { Context, Contexts } from "@/data/contexts/Contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Contexts sectionSobreRef={undefined} buttonSobre={undefined}>  
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Contexts>
    </>
  );
}

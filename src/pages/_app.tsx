import "@/styles/globals.css";
import Navbar from "@/components/surfaces/Navbar";
import type { AppProps } from "next/app";
import Footer from "@/components/surfaces/Footer";
import { Contexts } from "@/data/contexts/Contexts";

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

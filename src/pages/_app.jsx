import "../styles/globals.css";
import Navbar from "../components/surfaces/Navbar";
import Footer from "../components/surfaces/Footer";
import { Contexts } from "../data/contexts/Contexts";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Little black coffee</title>
        <meta
          name="description"
          content="Criando um site com typescript e next.js 13"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Contexts sectionSobreRef={undefined} buttonSobre={undefined}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Contexts>
    </>
  );
}

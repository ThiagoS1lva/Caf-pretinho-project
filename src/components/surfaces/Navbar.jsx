import styles from "../styles/Navbar.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/data/contexts/Contexts";

export default function Navbar() {
  //Transparente ou não
  const [transparent, setTransparent] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleScroll() {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setTransparent(true);
    } else if (scrollTop === 0) {
      setTransparent(false);
    }
  }
  
  const { buttonSobre, sectionSobreRef } = useContext(Context);

  return (
    <nav className={transparent ? styles.navbar1 : styles.navbar}>
      <ul className={styles.menu}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <li onClick={() => buttonSobre(sectionSobreRef)}>Sobre</li>
        <li>Cardápio</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}

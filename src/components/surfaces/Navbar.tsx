import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";

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

  return (
    <nav className={transparent ? styles.navbar1 : styles.navbar}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Cardápio</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}

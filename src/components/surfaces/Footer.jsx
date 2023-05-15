import styles from "../styles/Footer.module.css";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.icon}>
        <a href="https://www.facebook.com/"><ImFacebook size={25}/></a>
        <a href="https://twitter.com/"><BsTwitter size={25}/></a>
        <a href="https://www.instagram.com/"><BsInstagram size={25}/></a>
      </div>
      <div className={styles.info}>
        <p>LITTLE BLACK COFFEE</p>
        <p>Feito por <a href="https://www.linkedin.com/in/thiago-oliveira-49952823a/">Thiago Oliveira</a></p>
        <p>@2023</p>
      </div>
    </footer>
  );
}

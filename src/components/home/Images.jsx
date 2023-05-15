import Image from "next/image";
import styles from "../styles/home/Images.module.css";

export default function Images() {
  return (
    <div className={styles.container}>
      <div className={styles.fImage}>
        <Image src="/imagem1.jpg" alt="Café" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className={styles.lImage}>
        <Image src="/imagem2.jpg" alt="Café" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
    </div>
  );
}

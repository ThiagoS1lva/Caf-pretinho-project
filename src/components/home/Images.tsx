import Image from "next/image";
import styles from "../styles/Images.module.css";

export default function Images() {
  return (
    <div className={styles.container}>
      <div className={styles.fImage}>
        <Image src="/imagem1.jpg" alt="Café" fill={true} style={{objectFit:"cover"}}/>
      </div>
      <div className={styles.lImage}>
        <Image src="/imagem2.jpg" alt="Café" fill={true} style={{objectFit:"cover"}}/>
      </div>
    </div>
  );
}

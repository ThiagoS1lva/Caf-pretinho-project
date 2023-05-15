import Image from "next/image";
import styles from '../styles/torra/QualityRoasting.module.css'

export default function QualityRoasting() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>QUALIDADE DA TORRA</h1>
        <p>
          A qualidade da torra do café é uma das principais determinantes do
          sabor, aroma e aparência da bebida. A torra é o processo pelo qual o
          café verde é aquecido para liberar seus sabores e aromas, e a
          qualidade da torra se refere a como esse processo é realizado. A torra
          adequada deve realçar as notas e sabores naturais do café, enquanto
          minimiza quaisquer notas desagradáveis.
        </p>
      </div>
      <div className={styles.image}>
        <Image src="/quality.jpg" alt="café" fill={true}/>
      </div>
    </div>
  );
}

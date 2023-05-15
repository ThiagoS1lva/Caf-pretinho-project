import Image from "next/image";
import styles from "../styles/torra/LevelRoasting.module.css";

export default function LevelRoasting() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.text}>
          <h1> NIVEL DA TORRA </h1>
          <p>
            Existem vários níveis de torra que podem afetar o sabor e a
            qualidade do café. A torra clara, por exemplo, é geralmente mais
            ácida e tem um sabor mais suave, enquanto a torra média tem um sabor
            mais balanceado e agradável. A torra escura pode ter notas de
            caramelo e chocolate, mas também pode ser amarga e desagradável se
            não for feita corretamente. Cada nível de torra tem suas próprias
            características e pode ser preferido por diferentes consumidores de
            café.
          </p>
        </div>
        <div className={styles.img}>
          <Image src="/nivel.jpg" alt="copo com cafe" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.img}>
          <Image src="/importancia.jpg" alt="café na torra" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className={styles.text}>
          <h1>IMPORTÂNCIA DA TORRA</h1>
          <p>
            A qualidade da torra do café é importante porque pode afetar
            significativamente o sabor e a qualidade da bebida. Uma torra muito
            escura pode queimar o café e dar um sabor amargo, enquanto uma torra
            muito clara pode não liberar completamente os sabores naturais do
            café. Além disso, a qualidade da torra também pode afetar a
            consistência e a aparência do café.
          </p>
        </div>
      </div>
    </div>
  );
}

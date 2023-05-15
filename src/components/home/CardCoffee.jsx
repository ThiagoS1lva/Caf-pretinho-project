import Image from "next/image";
import styles from "../styles/home/CardCofffee.module.css";


export default function CardCoffee(props ) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt="coffee"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles.info}>
        <h1>{props.title}</h1>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}

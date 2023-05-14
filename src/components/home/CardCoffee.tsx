import Image from "next/image";
import styles from "../styles/home/CardCofffee.module.css";

type CardCoffeeProps = {
    image: string;
    title: string;
    description: string;
}


export default function CardCoffee(props :CardCoffeeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt="coffee"
          style={{ objectFit: "cover" }}
          fill={true}
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

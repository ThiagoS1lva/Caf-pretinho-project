import styles from "../styles/ParallaxImage.module.css";

export default function ParallaxImage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <h1>LITTLE BLACK COFFEE</h1>
          <p>
            Descubra o sabor de um café feito com paixão e experiência. Nossa
            seleção de grãos especiais é cuidadosamente torrada para trazer o
            melhor aroma e sabor à sua xícara. Sinta o calor e o aroma de um
            café fresquinho enquanto se delicia com nossas deliciosas sobremesas
            artesanais. Venha para o nosso café e deixe-se surpreender por uma
            experiência única e inesquecível. O café perfeito está aqui.
          </p>
        </div>
      </div>
    </div>
  );
}

import CardCoffee from "./CardCoffee";
import styles from "../styles/CoffeeStyle.module.css";
import Image from "next/image";

export default function CoffeeStyle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MAIS PEDIDOS</h1>
      <div className={styles.content}>
        <CardCoffee
          image="/latte.jpg"
          title="LATTE ART"
          description="Latte art é uma técnica que transforma a simples xícara de café em uma verdadeira obra de arte. Consiste em criar desenhos na superfície do leite vaporizado, utilizando a própria textura do leite e espresso. Essa técnica tem ganhado cada vez mais popularidade, não só pela beleza visual que traz à bebida, mas também pela habilidade técnica exigida. Se você é fã de café e aprecia uma boa apresentação, vai adorar conhecer mais sobre o mundo do latte art."
        />
        <CardCoffee
          image="/mocca.jpg"
          title="MOCCA"
          description="Mocca é um café preparado com uma mistura de espresso e chocolate, criando uma bebida indulgente e saborosa. Além disso, é comum adicionar leite vaporizado para torná-lo ainda mais cremoso e suave. Se você é um amante de café e chocolate, o mocca é uma opção deliciosa para experimentar. Descubra mais sobre essa combinação perfeita de café e chocolate e desfrute de um momento de prazer com essa bebida irresistível."
        />
      </div>
      <div className={styles.fresh}>
        <div className={styles.image}>
          <Image src="/fresh.jpg" fill={true} alt="fresh coffee" />
        </div>
        <div className={styles.description}>
          <h1>FRESH COFFEE</h1>
          <p>
            Fresh coffee é um café que foi recentemente torrado e moído,
            garantindo uma bebida mais saborosa e aromática. Quando os grãos de
            café são torrados, eles perdem naturalmente sua frescura, então
            quanto mais tempo entre a torra e o preparo do café, menos fresco
            ele será. O fresh coffee é considerado um café de alta qualidade e é
            a escolha ideal para os amantes da bebida que desejam experimentar o
            sabor intenso e autêntico do café. Além disso, o frescor também pode
            afetar os efeitos estimulantes do café, tornando-o ainda mais
            atraente para quem deseja uma dose de energia extra.
          </p>
        </div>
      </div>
    </div>
  );
}

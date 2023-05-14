import Image from "next/image";
import styles from "./styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre</h1>
      <div className={styles.row}>
        <div className={styles.img}>
          <Image
            src="/company.jpg"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Notebook com café"
          />
        </div>
        <div className={styles.text}>
          <h1>Sobre a Empresa</h1>
          <p className={styles.paragrafo}>
            <span>Little Black Coffee</span> é uma empresa de café que valoriza
            a qualidade, a responsabilidade social e o cuidado com o meio
            ambiente. Com grãos selecionados e torrados com maestria, eles
            oferecem uma experiência única para os amantes de café. Além disso,
            a empresa se preocupa em apoiar projetos sociais e preservar a
            natureza, tornando-se uma opção consciente e deliciosa para os
            clientes.
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.text}>
          <h1>
            Coffee<br></br>Store
          </h1>
          <p className={styles.paragrafo1}>
            Nossa loja de café é um refúgio acolhedor e aconchegante para
            aqueles que buscam uma pausa na correria do dia a dia. Com uma
            decoração charmosa e rústica, nossas mesas de madeira são perfeitas
            para relaxar e desfrutar de um café delicioso. O ambiente é repleto
            de aromas agradáveis e a música suave cria uma atmosfera relaxante.
            Nossa equipe de baristas é atenciosa e apaixonada, sempre pronta
            para ajudá-lo a escolher a bebida perfeita para o seu paladar. Venha
            nos visitar e descubra um lugar tranquilo para recarregar suas
            energias.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src="/lugar.jpg"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Lugar do office"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>image</div>
        <div>text</div>
      </div>
    </div>
  );
}

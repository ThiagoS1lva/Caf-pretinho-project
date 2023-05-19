import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Bebida.module.css'
import Image from "next/image";


export default function DrinkDetails() {
    const [bebida, setBebida] = useState({});
    const [loading, setLoading] = useState(true);
    const [cafeina, setCafeina] = useState(true);
    const [lactose, setLactose] = useState(true);
    const [acucar, setAcucar] = useState(true);
    const router = useRouter();
    const { ID } = router.query;


    const handleCafeClick = () => {
        setCafeina(!cafeina)
    }
    const handleLactoseClick = () => {
        setLactose(!lactose)
    }
    const handleAcucarClick = () => {
        setAcucar(!acucar)
    }

    useEffect(() => {
        if (ID) {
            axios.get(`https://server-cafezinho.onrender.com/drink/${ID}`)
                .then((res) => {
                    setBebida(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.container}>
            {!loading ? (
                <>
                    <div className={styles.imagem}>
                        <Image src={bebida.IMG} fill={true} alt={bebida.NAME} />
                    </div>
                    <div className={styles.content}>
                        <h1>{bebida.NAME}</h1>
                        <h2>R${bebida.PRICE.toFixed(2)}</h2>

                        <div className={styles.desc}>
                            <p><span>Tamanho: </span>{bebida.SIZES}</p>
                            <p><span>Informações: </span>{bebida.DESCRIPTION}</p>
                            <p><span>Ingredientes: </span>{bebida.INGREDIENTS}</p>
                        </div>
                        <h1>Escolha as seguintes opções:</h1>
                        <div className={styles.option}>
                            <button onClick={handleLactoseClick} className={lactose ? styles.lactose_active : styles.lactose}>Lactose</button>
                            <button onClick={handleAcucarClick} className={acucar ? styles.sugar_active : styles.sugar}>Açucar</button>
                            <button onClick={handleCafeClick} className={cafeina ? styles.coffee_active : styles.coffee}>Cafeina</button>
                        </div>
                        <button className={styles.comprar}>Comprar</button>
                    </div>
                </>
            ) : (
                <div className={styles.loading}>
                    <Image src="/pac.svg" width={150} height={150} alt="loading" />
                </div>
            )}
        </div>
    )

}
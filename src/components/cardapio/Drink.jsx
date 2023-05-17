import styles from '../styles/cardapio/Drink.module.css'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Drink() {
    const [drink, setDrink] = useState([])

    useEffect(() => {
        axios.get('https://server-cafezinho.onrender.com/Drink')

            .then(response => {
                setDrink(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1>Bebidas Geladas</h1>
            <hr />
            <br />
            <div className={styles.grid}>
                {drink.map(drink => (
                    <div key={drink.ID} className={styles.info}>
                        <p>{drink.NAME}</p>
                        <div className={styles.img}>
                            <Image src={drink.IMG} fill={true} alt={drink.NAME} />
                        </div>
                        <div className={styles.desc}>
                            <p>R${drink.PRICE.toFixed(2)}</p>
                            <Link href={`/bebida/${drink.ID}`}><button>Comprar</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
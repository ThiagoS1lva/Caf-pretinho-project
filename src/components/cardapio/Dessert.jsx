import styles from '../styles/cardapio/Dessert.module.css'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Dessert() {
    const [dessert, setDessert] = useState([])

    useEffect(() => {
        axios.get('https://server-cafezinho.onrender.com/Dessert')

            .then(response => {
                setDessert(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1>Sobremesas</h1>
            <hr />
            <br />
            <div className={styles.grid}>
                {dessert.map(dessert => (
                    <div key={dessert.ID} className={styles.info}>
                        <p>{dessert.NAME}</p>
                        <div className={styles.img}>
                            <Image src={dessert.IMG} fill={true} alt={dessert.NAME} />
                        </div>
                        <div className={styles.desc}>
                            <p>R${dessert.PRICE.toFixed(2)}</p>
                            <Link href={`/sobremesa/${dessert.ID}`}><button>Comprar</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
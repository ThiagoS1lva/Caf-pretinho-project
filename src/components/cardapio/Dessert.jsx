import styles from '../styles/cardapio/Dessert.module.css'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Dessert() {
    const [dessert, setDessert] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://server-cafezinho.onrender.com/Dessert')

            .then(response => {
                setDessert(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {!loading ?
                <>
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
                </> :
                <div className={styles.loading}>
                    <Image src="/pac.svg" width={150} height={150} alt="loading" />
                </div>}

        </div>
    )
}
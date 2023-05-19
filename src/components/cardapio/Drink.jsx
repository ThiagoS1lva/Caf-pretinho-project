import styles from '../styles/cardapio/Drink.module.css'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Drink() {
    const [drink, setDrink] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://server-cafezinho.onrender.com/Drink')

            .then(response => {
                setDrink(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {loading ? 
            <div className={styles.loading}>
                <Image src="/pac.svg" width={150} height={150} alt="loading" />
            </div> :
                <>
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
                </>}
        </div>
    )
}
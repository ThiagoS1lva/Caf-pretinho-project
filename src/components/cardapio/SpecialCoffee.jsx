import styles from '../styles/cardapio/SpecialCoffee.module.css'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function SpecialCoffee() {
    const [coffee, setCoffee] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://server-cafezinho.onrender.com/Coffee')
            .then(response => {
                setCoffee(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={styles.container}>
            {loading ?
                <div className={styles.loading}>
                    <Image src="/pac.svg" width={150} height={150} alt="loading" />
                </div>
                :
                <>
                    <h1>Café especiais</h1>
                    <hr />
                    <br />
                    <div className={styles.grid}>
                        {coffee.map(coffee => (
                            <div key={coffee.ID} className={styles.info}>
                                <p>{coffee.NAME}</p>
                                <div className={styles.img}>
                                    <Image src={coffee.IMG} fill={true} alt={coffee.NAME} />
                                </div>
                                <div className={styles.desc}>
                                    <p>R${coffee.PRICE.toFixed(2)}</p>
                                    <Link href={`/cafe/${coffee.ID}`}><button>Comprar</button></Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </>}

        </div>
    )
}
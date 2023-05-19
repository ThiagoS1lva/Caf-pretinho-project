import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-spring';
import styles from '../styles/home/Contador.module.css'
import { useState, useEffect } from 'react';

export default function Contador() {
    const [counted, setCounted] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: '0.1',
    });

    useEffect(() => {
        if (inView && !counted) {
            setCounted(true);
        }
    }, [inView, counted])

    const { value } = useSpring({
        from: { value: 0 },
        to: { value: counted ? 1000 : 0 },
        immediate: !inView,
        config: { duration: 1200 }
    });


    return (
        <div ref={ref} className={styles.container}>
            <p>+ de<animated.span>{value.interpolate(val => Math.floor(val))}</animated.span> Clientes satisfeitos</p>

        </div>
    )



}
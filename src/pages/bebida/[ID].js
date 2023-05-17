import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function DrinkDetails() {
    const [bebida, setBebida] = useState({});
    const router = useRouter();
    const { ID } = router.query;

    useEffect(() => {
        if (ID) {
            axios.get(`https://server-cafezinho.onrender.com/drink/${ID}`)
            .then((res) => {
                setBebida(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <h1>{bebida.NAME}</h1>
    )

}
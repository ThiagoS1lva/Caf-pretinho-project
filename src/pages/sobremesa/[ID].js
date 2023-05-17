import axios from  "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DessertDetails() {
    const [sobremesa, setSobremesa] = useState({});
    const router = useRouter();
    const { ID } = router.query;

    useEffect(() => {
        if (ID) {
            axios.get(`https://server-cafezinho.onrender.com/dessert/${ID}`)
            .then((res) => {
                setSobremesa(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <h1>{sobremesa.NAME}</h1>
    )

}
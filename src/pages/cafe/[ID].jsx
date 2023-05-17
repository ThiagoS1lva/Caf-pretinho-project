import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function CoffeeDetails() {
  const [cafe, setCafe] = useState({});
  const router = useRouter();
  const { ID } = router.query;

  useEffect(() => {
    if (ID) {
      axios
        .get(`https://server-cafezinho.onrender.com/coffee/${ID}`)
        .then((res) => {
          setCafe(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <h1>{cafe.NAME}</h1>;
}

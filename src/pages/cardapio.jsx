import Dessert from "@/components/cardapio/Dessert";
import SpecialCoffee from "../components/cardapio/SpecialCoffee";
import Drink from '../components/cardapio/Drink'

export default function Cardapio() {


    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize:'4em' }}>Cardápio</h1>
            <SpecialCoffee />
            <Dessert/>
            <Drink />
        </>
    )
}
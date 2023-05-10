import { useState } from "react";
import { FiPlus, FiMinus} from 'react-icons/fi'

import * as C from "./styles";

import { api } from "../../services/api";

import { Button } from "../Button";

export function FoodCard({food}){
    const avatarUrl = food.avatarFood ? `${api.defaults.baseURL}/files/${food.avatarFood}` : null
    const [quantity, setQuantity] = useState(1);

    function ReduceQuantity(){
       return quantity <= 1 ? alert('Prato já foi reduzido ao máximo') : setQuantity(prevState => --prevState);
    }
    function IncreaseQuantity(){
       setQuantity(prevState => ++prevState)
    }
    return(
    <C.Container>
        <img src={avatarUrl} alt="Foto da comida" />
       <h1>{food.title} &gt;</h1>

       <h2>R$ {(food.price * quantity).toFixed(2)}</h2>

       <div>
        <button onClick={ReduceQuantity}><FiMinus/></button>
        <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
        <button onClick={IncreaseQuantity}><FiPlus/></button>
       </div>

       <Button text='Incluir'/>
    </C.Container>
    )
}
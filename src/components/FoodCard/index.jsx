import { useEffect, useState } from "react";
import { FiPlus, FiMinus,} from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart,} from 'react-icons/ai'

import * as C from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";

export function FoodCard({food}){
    const avatarUrl = food.avatarFood ? `${api.defaults.baseURL}/files/${food.avatarFood}` : null
    const [quantity, setQuantity] = useState(1);

    const { favorites, setFavorites} = useAuth();

    const handleAddFavoriteFood = () => {
      setFavorites(prevState => [...prevState, food]);
    }

    const handleRemoveFavoriteFood = () => {
      setFavorites(prevState => prevState.filter(favorite => favorite.title !== food.title));
    }

    const isFavorite = favorites.some(favorite => favorite.title === food.title);

    function ReduceQuantity(){
       return setQuantity(prevState => --prevState);
    }
    function IncreaseQuantity(){
       setQuantity(prevState => ++prevState)
    }

    useEffect(() => {
      localStorage.setItem("@explorerfoods:favorites", JSON.stringify(favorites));
    }, [favorites])
    return(
    <C.Container>
      {
         isFavorite ? <AiFillHeart className="favorite" onClick={() => handleRemoveFavoriteFood()}/> : <AiOutlineHeart className="favorite" onClick={() => handleAddFavoriteFood()}/>
      }
        <img src={avatarUrl} alt="Foto da comida" />
       <h1>{food.title} &gt;</h1>

       <h2>R$ {(food.price * quantity).toFixed(2)}</h2>

       <div>
        <button onClick={ReduceQuantity} disabled={quantity <= 1}><FiMinus/></button>
        <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
        <button onClick={IncreaseQuantity}><FiPlus/></button>
       </div>

       <Button>Incluir</Button>
    </C.Container>
    )
}
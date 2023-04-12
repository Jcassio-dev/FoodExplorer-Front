import { useState, useEffect } from "react";

import * as C from "./styles"

import ContentImage from '../../assets/Foods.png'

import {api} from '../../services/api'

import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";

export function Home(){
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        async function fetchFoods(){
            const response = await api.get(`/foods?title=${search}`);
            setFoods(response.data)
        }

        fetchFoods();
        console.log(foods)
    },  [search]);

    useEffect(() => {
        function groupCategories(){
            setCategories([])
            foods.map(food =>  setCategories(prevState => [...prevState, food.category]));
            const filterCategories = categories.filter((category, index) => categories.indexOf(category) === index);
            setFilteredCategories(filterCategories)
        }
        groupCategories();

    }, [foods]);

    return(
        <C.Container>
            <Header onChange={e => setSearch(e.target.value)}/>
            <C.Content>
                <C.Info>
                    <div className="ImageDiv">
                    <img src={ContentImage} alt="Macarons voando de diversas cores"/>
                    </div>
                    <div className="InfoText">
                        <h2>sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </C.Info>
                {foods && filteredCategories.map(category => (
                    <h1>{category}</h1>
                ))}
            </C.Content>
            <Footer/>
        </C.Container>
    );
}
import { useState, useEffect } from "react";

import * as C from "./styles"

import {api} from '../../services/api'

import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";



export function Home(){

    const [search, setSearch] = useState(' ');
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFoods(){
            const response = await api.get(`/foods/2`);
            setFoods(response.data)
            
        }
        fetchFoods();
        console.log(foods)
    },  [search])

    return(
        <C.Container>
            <Header onClick={e => setSearch(e.target.value)}/>
            <C.Content>
                s
            </C.Content>
            <Footer/>
        </C.Container>
    );
}
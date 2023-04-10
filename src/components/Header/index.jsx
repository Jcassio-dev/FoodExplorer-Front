import { useState } from 'react';

import * as C from './styles'

import polygon from "../../assets/polygon.svg";
import receipt from "../../assets/Receipt.svg";

import { FiMenu, FiSearch, FiX } from 'react-icons/fi';

import { Input } from '../Input'

import { useAuth } from '../../hooks/auth';


export function Header({search}){
    const [dropMenu, setDropMenu] = useState(false);

    function handleMenu(){
        setDropMenu(!dropMenu);
    }

    const { signOut } = useAuth(); 


    return(
    <C.Container>
        <div className={!dropMenu ? 'mobile menuFalse' : 'hidden'}>
            <C.IconButton onClick={handleMenu}>
                <FiMenu/>
            </C.IconButton>

            <C.Logo>
                    <img src={polygon} alt="Fígura plana hexagonal cinza"/>
                    <h1>food explorer</h1>
            </C.Logo>

            <C.IconButton>
                <img src={receipt} alt="Receita ícone"/>
            </C.IconButton>
        </div>
        <div className={dropMenu ? 'mobile MenuOn' : 'hidden'}>
            <C.IconButton onClick={handleMenu}>
                <FiX/>
            </C.IconButton>

            <C.Logo>
                <h1>Menu</h1>
            </C.Logo>


        </div>
        <C.Menu className={dropMenu ? 'show' : 'hidden'}>
            <C.Search>
                <FiSearch/>
                <Input placeholder="Busque por pratos ou ingredientes" onChange={search}/>
            </C.Search>
            <ul>
                <li><C.IconButton>Favoritos</C.IconButton></li>
                <li><C.IconButton onClick={signOut}>Sair</C.IconButton></li>
            </ul>
        </C.Menu>
    </C.Container>

    );
}
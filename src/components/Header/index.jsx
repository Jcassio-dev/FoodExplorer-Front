import * as C from './styles'

import polygon from "../../assets/polygon.svg";

import { FiMenu } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs'


export function Header(){
    return(
    <C.Container>
        <FiMenu/>

        <C.Logo>
                <img src={polygon} alt="Poligono"/>
                <h1>food explorer</h1>
        </C.Logo>
        
        <BsReceipt/>
    </C.Container>
    );
}
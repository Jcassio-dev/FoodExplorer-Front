import { useNavigate } from "react-router-dom"

import * as C from "./styles"

export function ButtonText({text, link, ...rest}){
    const navigate = useNavigate();

    return(
    <C.Container {...rest} onClick={() => navigate(link)}>
       {text}
    </C.Container>
    )
}
import * as C from "./styles"

export function ButtonText({text, ...rest}){
    return(
    <C.Container {...rest}>
       {text}
    </C.Container>
    )
}
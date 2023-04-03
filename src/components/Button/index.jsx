import * as C from "./styles"

export function Button({text, ...rest}){
    return(
    <C.Container {...rest}>
       {text}
    </C.Container>
    )
}
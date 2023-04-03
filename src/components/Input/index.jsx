import * as C from "./styles"

export function Input({label, ...rest}){
    return(
    <C.Container>
        <label>{label}</label>
        <input {...rest}/>
    </C.Container>
    )
}
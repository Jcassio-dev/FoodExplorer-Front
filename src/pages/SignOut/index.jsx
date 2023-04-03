import * as C from "./styles"
import polygon from "../../assets/polygon.svg"
import {Input} from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
export function SignOut() {
  return (
    <C.Container>
      <C.Logo>
        <img src={polygon} alt="Poligono"/>
        <h1>food explorer</h1>
      </C.Logo>
    <C.Form>
      <h1>Crie sua conta</h1>
      <Input 
      label="Seu nome"
      type="text" 
      placeholder="Exemplo: Maria da Silva"
      />

      <Input 
      label="E-mail"
      type="text" 
      placeholder="Exemplo: Exemplo@email.com.br"
      />
      <Input 
      label="Senha"
      type="password" 
      placeholder="No mínimo 6 caracteres"
      />

      <Button text="Criar conta"/>

      <ButtonText text="Já tenho uma conta"/>
    </C.Form>
   </C.Container>
  )
}


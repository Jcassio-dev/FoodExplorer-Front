import * as C from "./styles"

import polygon from "../../assets/polygon.svg"
import chefAmico from "../../assets/amico.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth()

  function handleSignUp(){
    if(!name){
      alert("Preencha o campo de nome");
      return
    }
    if(!email){
      alert("Preencha o campo de e-mail");
      return
    }
    if(!password){
      alert("Preencha o campo de senha");
      return
    }
    
    signUp({name, email, password})
  }

  return (
    <C.Container>
      <C.Logo>
        <div className="Logo">
        <img src={polygon} alt="Poligono"/>
        <h1>food explorer</h1>
        </div>
        <div className="SVG">
        <img src={chefAmico} alt="Chef"/>
        </div>
      </C.Logo>
    <C.Form>
      <h1>Crie sua conta</h1>
      <Input 
      label="Seu nome"
      type="text" 
      placeholder="Exemplo: Maria da Silva"
      onChange={e => setName(e.target.value)}
      />

      <Input 
      label="E-mail"
      type="text" 
      placeholder="Exemplo: exemplo@email.com.br"
      onChange={e => setEmail(e.target.value)}
      />

      <Input 
      label="Senha"
      type="password" 
      placeholder="No mínimo 6 caracteres"
      onChange={e => setPassword(e.target.value)}
      />

      <Button text="Criar conta" onClick={handleSignUp}/>

      <ButtonText text="Já tenho uma conta" link="/"/>
    </C.Form>
   </C.Container>
  )
}


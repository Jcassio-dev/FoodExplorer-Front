import { useState } from "react";

import * as C from "./styles";

import { useAuth } from '../../hooks/auth'

import polygon from "../../assets/polygon.svg";
import chefAmico from "../../assets/amico.svg"

import {Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(){
    if(!email){
      alert("Preencha o campo de e-mail");
      return
    }
    if(!password){
      alert("Preencha o campo de senha");
      return
    }

    signIn({email, password})
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
      <h1>Faça login</h1>
      <Input 
      label="E-mail"
      type="text" 
      placeholder="Exemplo: Exemplo@email.com.br"
      onChange={e => setEmail(e.target.value)}
      />
      <Input 
      label="Senha"
      type="password" 
      placeholder="No mínimo 6 caracteres"
      onChange={e => setPassword(e.target.value)}
      />

      <Button text="Entrar" onClick={handleSignIn}/>

      <ButtonText text="Criar uma conta" link="/register"/>
    </C.Form>
   </C.Container>
  )
}


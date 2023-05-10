import * as C from './styles';
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function Add(){
 return(
    <C.Container>
        <Header/>
        <C.Content>
            <ButtonText text={`Voltar`} icon={AiOutlineLeft} link={'/'}/>

            <C.Form>
                <h1>Novo Prato</h1>

                <Input label='nome' type='text' placeholder='Ex: Salada Ceasar'/>
            </C.Form>

        </C.Content>
    </C.Container>
 )
}
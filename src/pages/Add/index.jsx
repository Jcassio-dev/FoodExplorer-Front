import * as C from './styles';
import { AiOutlineLeft, AiOutlineDownload } from 'react-icons/ai'


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

                <div className="inputWrapper food">
                    <span>Imagem do prato</span>

                    <label htmlFor="food-pic">
                        <AiOutlineDownload/>
                        <input 
                        type='file' 
                        id='food-pic'
                        /> 

                        <span>Selecione a Imagem</span>
                    </label>
                </div>
                <Input label='nome' type='text' placeholder='Ex: Salada Ceasar' classname='label'/>
                <div className="inputWrapper">
                    <label htmlFor='categoria'>Categoria</label>
                    <select name="categoria" id="categoria">
                        <option value="Selecionar">Selecionar</option>
                        <option value="Refeicao">Refeição</option>
                        <option value="PratoPrincipal">Prato Principal</option>
                        <option value="Bebida">Bebida</option>
                    </select>
                </div>

            </C.Form>

        </C.Content>
    </C.Container>
 )
}
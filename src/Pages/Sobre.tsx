import { ChangeEvent, useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {Voltar} from  '../componentes/Voltar' 



export const Sobre = () => {

    const [Sugestao, setSugestao] = useState('');

    const changeSugestao = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setSugestao (e.target.value)
    } 
    
   
    return (
        <div >
            <Voltar/>
             <h1 className='py-1 m-2 text-center text-3xl'> <strong>Sobre</strong> </h1>

            <p className='text-center text-lg font-sans '> 
              <strong>  
                Bem vindo a Base de Conhecimento da Acal Home Center!<br/> 
                Essa plataforma é um projeto que visa melhorar os processos internos da empresa e auxiliar os colaboradores a <br/>
                sanarem suas dúvidas e resolver problemas referentes a sua área e tambem a outras áreas da empresa.
                </strong>
            </p>

            <h2 className=' py-10 text-center'><strong> Teve alguma idéia de melhoria? <br/>Deixe aqui a sua sugestão !</strong></h2>
           
             <textarea 
                className=' text-center w-60 h-50 border-stone-900 border-2 rounded-xl resize'
                placeholder='digite aqui!'
                value={Sugestao}              
                onChange={changeSugestao} >
             </textarea>
                
            
        </div>
    );
}
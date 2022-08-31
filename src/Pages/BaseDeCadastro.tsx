import {Link} from 'react-router-dom'
import {Voltar} from '../componentes/Voltar'
import {Titulo} from '../componentes/BotoesDocuments.tsx/BotaoTitulo'
import {Texto} from '../componentes/BotoesDocuments.tsx/BotaoTexto'
import {Imagem} from '../componentes/BotoesDocuments.tsx/BotaoImagem'
import { useState, ChangeEvent,ReactNode } from 'react'



export  const BaseCadastro = () => {

    const [ titulo, setTitulo ] = useState("")
    const [ text, setText ] = useState("")
    const [ img, setimg ] = useState("") 

    const handleTitulo = (e:ChangeEvent<HTMLInputElement>) => {
        console.log("Clicado!")
         setTitulo (e.target.value)
         e.target.style.display = 'block'
    }

    const handleTexto = () =>  {
        console.log("Clicado!")
        let textarea = document.getElementById('textarea') as HTMLInputElement
        // setText (e.target.value)
        textarea.style.display = "block"
    }

  
    const handleImagem = () => {
        console.log("Clicado!")
        let img = document.getElementById('img') as HTMLInputElement
        img.style.display = "block"
    }

    return(

        
        <div>
            <Voltar/>

            <div className='display-flex ' style={{display:' flex', height:'100hv', width:'100wv',border:'1px solid #000000'}}>

                <div className='lateral-botoes' style={{margin:'10px',border:'1px solid #000000', width:'15%', height:'400px'}}>
                    <Titulo name='titulo' />
                    <Texto handleTexto={handleTexto} />
                    <Imagem handleImagem={handleImagem}/>
                </div>

                <div 
                    className='conteudo-form' 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        border:'1px solid #000000', 
                        width:'85%', height:'400px'
                    }}
                >
                    
                    <input 
                        // style={{ display: 'none', width: '400px', border: '1px solid #000000' }} 
                        id="input" 
                        onChange={handleTitulo} 
                        value={titulo} 
                        placeholder='Digite seu Titulo aqui'
                    />
                    
                    <textarea 
                        style={{ display: 'none', width: '400px', height: '200px', border: '1px solid #000000'}}  
                        id="textarea" 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    >
                    </textarea>

                    <img
                        style={{
                            width: "400px",
                            height: "100px",
                            display: 'none'
                        }}
                        id="img"
                        src="https://images.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

                </div>
             
            </div>
        </div>
    )
}
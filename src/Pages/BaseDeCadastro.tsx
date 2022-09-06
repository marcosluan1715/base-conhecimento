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
    const[displayTitulo, setDisplayTitulo] = useState('hidden');
    const[displayText, setDisplayText] = useState('hidden');
    const[displayImg, setDisplayImg] = useState('hidden');

    const handleTitulo = () => {
        setDisplayTitulo('block')
    }

    const handleTexto = () =>  {
        setDisplayText('block')
    }

  
    const handleImagem = () => {
        setDisplayImg('block')
    }

    return(

        
        <div>
            <Voltar/>
            {/* className='display-flex ' style={{display:' flex', justifyContent: 'space-between', height:'100hv', width:'100wv',border:'1px solid #000000'}} */}
            {/* style={{margin:'10px',border:'1px solid #000000',  height:'400px'}} */}

            <div>

                <div className='lateral-botoes text-left flex' >
                    <Titulo name='Titulo' handleTitulo={handleTitulo} />
                    <Texto handleTexto={handleTexto} />
                    <Imagem handleImagem={handleImagem}/>
                </div>

                <div className=''
                    
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        width:'85%', height:'400px'
                    }}
                >
                    
                    <input 
                        
                        className={displayTitulo} 
                        id="input" 
                        onChange={e=>setTitulo(e.target.value)} 
                        value={titulo} 
                        placeholder='Digite seu Titulo aqui'
                    />
                    
                    <textarea
                         className={displayText}
                        style={{  width:'400px', height: '200px', border: '1px solid #000000'}}  
                        id="textarea" 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    >
                    </textarea>

                    <img
                        className={displayImg}
                        style={{
                            width: "400px",
                            height: "100px",
                        }}
                        
                        id="img"
                        src="https://images.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

                </div>
             
            </div>
        </div>
    )
}
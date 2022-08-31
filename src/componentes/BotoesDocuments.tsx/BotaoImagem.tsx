import {useState} from 'react'

type Props = {
    handleImagem: () => void
}

export const Imagem = ({ handleImagem }: Props) => {
    return(

        <div>
            <button onClick={handleImagem} className='h-22 w-22'>Imagem</button>

        </div>
    )
}
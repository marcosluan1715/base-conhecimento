import {useState} from 'react'

type Props = {
    handleImagem: () => void
}

export const Imagem = ({ handleImagem }: Props) => {
    return(

        <div>
            <button className='p-2  w-40 border-2  bg-sky-500 text-blue-50  rounded' onClick={handleImagem} >Imagem</button>

        </div>
    )
}
import {useState} from 'react'

type Props = {
    handleTitulo?: () => void | null;
    name: string;

}

export const Titulo = ({ name, handleTitulo } : Props) => {
    return <button className='p-2 w-40 border-2  bg-sky-500 text-blue-50  rounded' onClick={handleTitulo}>{name}</button>
}
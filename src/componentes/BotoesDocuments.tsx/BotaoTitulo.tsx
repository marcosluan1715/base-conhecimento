import {useState} from 'react'

type Props = {
    handleTitulo?: () => void | null;
    name: string;

}

export const Titulo = ({ name } : Props) => {
    return <button  >{name}</button>
}
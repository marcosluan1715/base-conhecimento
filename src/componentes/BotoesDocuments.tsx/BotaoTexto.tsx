import {useState,ChangeEvent} from 'react'

type Props = {
    handleTexto: ()=>void | null
}



export const Texto = ({ handleTexto }: Props) => {
    return(

        <div>
            <div>
                <button className='p-2 w-40 border-2  bg-sky-500 text-blue-50  rounded' onClick={handleTexto}>Texto</button>
            </div>
        </div>
    )
}
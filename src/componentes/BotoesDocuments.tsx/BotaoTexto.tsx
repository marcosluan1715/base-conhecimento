import {useState,ChangeEvent} from 'react'

type Props = {
    handleTexto: ()=>void | null
}



export const Texto = ({ handleTexto }: Props) => {
    return(

        <div>
            <div>
                <button onClick={handleTexto}>Texto</button>
            </div>
        </div>
    )
}
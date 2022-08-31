import { Link } from "react-router-dom";
import AcalImage from '../Assets/Acal.png'
import {LinkSair} from '../componentes/Sair'
import Acal2 from '../Assets/Acal2.png'

export const Home = () => {
    return (

        <div className="m-2">

            <LinkSair/>
            <img className='fixed right-12 top-12 py-6 ' src= {AcalImage} alt='' width={'180'} />

            <h1 className='p-5 text-3xl text-left'> Bem Vindo(a), </h1> <br/>

            <div className='flex grid-cols-3 gap-11 '>

        
                    <Link to='/TI'>

                        <button className=' h-32 w-32 text-2xl text-white bg-sky-500'>TI</button>

                    </Link>

                    <Link to='/BaseCadastro'>

                        <button className=' h-32 w-32 text-2xl text-white bg-sky-500'>Base De Cadastro</button>

                    </Link>
                    <Link to='/sobre'> 

                        <button className=' h-32 w-32 text-2xl text-white  bg-sky-500'>Sobre</button>

                    </Link> 
                    <Link to='/Feedback'> 
                         <button className=' h-32 w-32 text-2xl text-white  bg-sky-500'>Feedbacks</button>

                    </Link> 
                
            </div>
            

        </div>
    );
}
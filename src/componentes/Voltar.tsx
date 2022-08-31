import {Link} from 'react-router-dom'

export const Voltar = () => {
    return(
    <div className='fixed top-8 left-12 text-1xl font-sans h-9 w-12 text-white  border-cyan-400 '>
    <Link to={'/Home'}>
        <button >Voltar</button>  
    </Link>
    
  </div>
    )
}
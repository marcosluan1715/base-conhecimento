import {Link} from 'react-router-dom'

export const LinkSair = () => {
    return(
        
        <div className='fixed top-8 left-12 text-1xl font-sans h-9 w-9 text-white  '>
          <Link to={'/'}>
              <button >Sair</button>  
          </Link>
          
        </div>
    )
}
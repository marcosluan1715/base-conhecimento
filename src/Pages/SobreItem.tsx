import {useParams,useNavigate, Navigate} from 'react-router-dom'
import { Home } from './Home';

export const SobreItem = () => {
const params = useParams();
const navigate = useNavigate();

const handleback = () => {
  navigate (- 1); 
}
const handleHome = () => {
 
    navigate ('/'); 
}

    return (
        <div >
            pagina sobre {params.slug}
            <hr/>
            <button className='p-2 ' onClick={handleback}>voltar</button>
            <button onClick={handleHome}>Home</button>
        </div>
    );
}
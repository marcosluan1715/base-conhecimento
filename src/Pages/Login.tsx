
import {Link} from 'react-router-dom';
import { Home } from './Home';
import {ChangeEvent, useState} from 'react';
import AcalImage from '../Assets/Acal.png'






export const Login = () => {

    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');

    const NameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setName (e.target.style.display) 
    }
    const PasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword (e.target.value)
    }

    return(

        <div className= ' p-1 mx-auto max-h-80 max-w-lg border-8 border-solid rounded-md w-95 h-80 bg-sky-50' >
            
                <img className='' src= {AcalImage} alt='' width={'140'} />

                <h1 className='py-1 text-xl'><strong>Acesse aqui</strong></h1> <br/>

                    <input className='p-1'
                        type='text' 
                        placeholder='username'
                        value={Name}
                        onChange={ NameChange}
                        /> <br/>
                    
                    <input className='p-1 ' 
                         type='text'
                         placeholder='password' 
                         value={Password}
                         onChange={ PasswordChange}
                    /> <br/>
                        
                 
                <Link  to='Home'>
                <button className=' w-40  bg-sky-500 text-emerald-50 p-1   border-x-2 border-y-2 rounded '>  entrar </button>
                </Link>
        
         </div>

    )
}
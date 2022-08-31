import './App.css';
import {RouteList } from './RouteList'


const  App = () =>  {

 return (

  <div className='font-sans' > 

       <h1 className='p-5 text-center text-4xl  bg-sky-500 text-cyan-50'>
          Base de Conhecimentos Acal
        </h1> 

      <div className='py-4 text-center'>
        <RouteList/> 
      </div>
 
      <footer className='p-24 m-10 text-center  text-1xl  text-black-50'>
        <strong>Todos os direitos reservados</strong>
      </footer>
  </div>
   
  );
}

export default App;

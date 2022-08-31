import {Routes, Route, useRoutes} from 'react-router-dom'
import {Home} from './Pages/Home';
import {Sobre} from './Pages/Sobre';
import {SobreItem} from './Pages/SobreItem';
import {NotFound} from './Pages/NotFound'
import {RequireAuth} from './RequireAuth'
import {Login} from './Pages/Login'
import {BaseTI}from './Pages/TI'
import {BaseCadastro} from './Pages/BaseDeCadastro'
import {Feedback} from './Pages/Feedbacks'

export const RouteList = () => {
    return useRoutes([
        {path:'/', element:<Login/>},
        {path:'/Home', element: <Home/>},
        {path:'/sobre', element: <RequireAuth><Sobre /></RequireAuth> },
        {path:'/sobre/:slug', element:<SobreItem/> },
        {path:'*', element:<NotFound/>},
        {path:'/TI', element:<BaseTI/>},
        {path:'/BaseCadastro', element:<BaseCadastro/>},
        {path:'/Feedback', element:<Feedback/> }

    ]);
}


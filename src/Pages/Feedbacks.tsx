import AcalImage from '../Assets/Acal.png'
import {Voltar} from '../componentes/Voltar'

export const Feedback = () => {
    return(

        <div >
            <Voltar/>
            <div className='font-sans text-3xl'>
                <img className='fixed right-12 top-12 py-6 ' src={AcalImage} alt="" width={180} />

                Feedbacks Acal !
             </div>
           
            
        </div>
    );
}
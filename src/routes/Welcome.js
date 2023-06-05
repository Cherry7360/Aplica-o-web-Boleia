import './Welcome.css'
import Signin from '../components/auth/Signin';
function Welcome(){
    return(
        <>
         <section >
            <div className='dividir'>
                <div className='container_description'>   
                    <div className='description'>
                        <h1>Boleia App</h1>
                        <p >
                            Bem-vindo á nossa aplicação de Carpooling.
                            Compartilhe viagens, economize seu dinheiro
                            e ajude o meio ambiente.
                           
                       </p> 
                    </div>
                </div> 
                <div className='entrar_conta'>
                   <Signin/>
                </div>
            </div>
     </section>
        </>
    )
}
export default Welcome
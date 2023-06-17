import './Rotas.css'
import { Link} from 'react-router-dom';
function Rotas(){
    return(
        <div className='containerRotas'>
            <div className='container-partilhar'>
                <div className='partilharCarrona'>
               <Link to='/forms'>
                <button>Publicar Carona</button>
                </Link> 
            </div>
            </div>
            <div className="container-info2">
            </div>
        </div>
    )
}export default Rotas

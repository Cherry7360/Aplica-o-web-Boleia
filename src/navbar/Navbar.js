import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {UserAuth} from'../components/context/AuthContext'

function Navbar(){
    const {user,LogOut,porfilePicGoogle}= UserAuth()
    const signOut =async()=>{
        try{
            await LogOut()
        }catch(error){
            console.log(error)
        }
    }
    const getPorfil=()=> {
        <>
        </>

    }
    return(
        <>
        <nav>
            <div> <NavLink to="/welcome" >Boleia</NavLink >
          </div>
         <div>
                <ul id="menu">
                    <li><NavLink to="/home" 
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "active" : ""
                     }> Home </NavLink></li>
                     <li><NavLink to="/rotas" 
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "active" : ""
                     }> Rotas </NavLink></li>
                     <li><NavLink to="/about" 
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "active" : ""
                     }>About </NavLink></li>
                    <li>
                   {user? (
                        <button onClick={signOut}>Logout</button>
                   ):( <NavLink  to="/welcome"> Login </NavLink>
                  )}</li>
                  <li> {
                        user?(<div className='porfile' onClick={getPorfil}>< img src={porfilePicGoogle} alt='porfile' /></div>): <NavLink  to="/registrar"> Registrar </NavLink> 
                    }
                   </li>
                   
                 
                </ul>
            </div>
            
        </nav>
        </>
    )
}
export default Navbar
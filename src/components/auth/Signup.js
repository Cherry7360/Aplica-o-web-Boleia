
import './Signup.css'
import Formvalidation from './Formvalidation';
import {Link} from 'react-router-dom';
import { auth} from "../../firebase";
import{React, useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { collection,addDoc} from "firebase/firestore"



function Signup(){
    // variaveis
    const [userData, setUserData]=useState({
        email: '',
        password:'',
        confirmPassword:''
    })
  
    const [erros, setErro] =useState({})
    const userCollection = collection(db,"users")
   


    //funções
    
    const  createUser= async (e)=>{
        e.preventDefault();
        setErro(Formvalidation(userData));
        await addDoc(userCollection,{email: userData.email,password:userData.password})
        createUserWithEmailAndPassword(auth,userData.email,userData.password).then((useCredential)=>{
            console.log(useCredential);
        }).then((re)=>{
            alert("cadastrado")
        })
        .catch((error)=>{
            alert("erro ")
            console.log(error)
        })
      
       
    }


    const handleChange=(event)=>{
        
        let value= event.target.value;
        let name= event.target.name;
        setUserData((prevalue)=>{
            return{
                ...prevalue,
                [name]: value
            }
        })
        console.log(userData)
    }

    return(
            <div className='container-registrar'>
                    <div className='icon'>
                        <div className='registrar'>
                            <h3>Sign Up</h3>
                        </div> 
                    </div>
                    <div> 
                        <form className='form_registrar' onSubmit={createUser} >
                            <div>
                                <input type='name' placeholder='User name'/>
                                <input type='email' placeholder='Email' name='email' value={userData.email}  
                                 onChange={handleChange }/>
                                {erros.email && <p className='erro'>{erros.email}</p> }
                                <input type='password' placeholder='Palavra-passe' name='password' onChange={handleChange } value={userData.password}/>
                                {erros.password && <p className='erro'>{erros.password}</p> }
                                <input type='password' placeholder='Confirmar palavra-passe'/>
                               <button type="submit"  >Sign up</button>
                            </div>
                        </form>
                        <div className='back-login'>
                        <Link to="/welcome"> Fazer login</Link>
                        </div>
                    </div> 
                </div>
                 )
}
export default Signup;

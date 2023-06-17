
import './Signup.css'
import Formvalidation from './Formvalidation';
import {Link} from 'react-router-dom';
import { auth, db } from "../../firebase";
import{React, useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { collection,addDoc} from "firebase/firestore"



function Signup(){
    // variaveis
    const [userData, setUserData]=useState({
        username:'',
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
        await addDoc(userCollection,{username: userData.username,email: userData.email, password:userData.password})
        createUserWithEmailAndPassword(auth,userData.email,userData.password).then((useCredential)=>{
            console.log(useCredential);
        }).then((re)=>{
            alert("Usuário registrado com sucesso")
        })
        .catch((error)=>{
            alert("Erro no registro do usuário")
            console.log(error)
        })
      
       
    }


    const handleChange=(event)=>{
        
        let value= event.target.value;
        let name = event.target.name;
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
                    <div className='title'>
                        <div className='registrar'>
                            <h3>Sign Up</h3>
                        </div> 
                    </div>
                    <div> 
                        <form className='form_registrar' onSubmit={createUser} >
                            <div>
                                <input type='name' placeholder='User name' name='username'onChange={handleChange } value={userData.username}/>
                                {erros.username && <p className='erro'>{erros.password}</p> }

                                <input type='email' placeholder='Email' name='email' value={userData.email}  
                                 onChange={handleChange }/>
                                {erros.email && <p className='erro'>{erros.email}</p> }

                                <input type='password' placeholder='Palavra-passe' name='password' onChange={handleChange } value={userData.password}/>
                                {erros.password && <p className='erro'>{erros.password}</p> }

                                <input type='password' name='confirmPassword' placeholder='Confirmar palavra-passe' onChange={handleChange } value={userData.confirmPassword}/>
                                {erros.password && <p className='erro'>{erros.password}</p> }

                               <button type="submit"  >Sign up</button>
                            </div>
                        </form>
                        <div className='back-login'>
                        <Link className='cadastra-se' to="/welcome"> Fazer login</Link>
                        </div>
                    </div> 
                </div>
                 )
}
export default Signup;

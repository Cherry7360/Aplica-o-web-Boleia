// Leticia Zego
import './Signin.css'
import { Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { React, useState } from "react";
import { UserAuth, } from '../context/AuthContext';
//import { useNavigate } from 'react-router-dom';
function Signin(){
// variaveis

    //const navegate =useNavigate()

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const {signInGoogle}= UserAuth();
    
// funções
   
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((useCredential)=>{
            console.log(useCredential);
        }).catch((error)=>{
            console.log(error)
        })
         
    }

    const handleGoogle= async()=>{
        try{
            await signInGoogle();

        }catch(error){
            alert('erro')
        }
    }


    return(
        <div>
                <div className='container_login'>
                    <div className='title_login'>
                        <div className='login'>
                            <h3>Login</h3>
                        </div>    
                    </div>
                    <div className='col' >
                        <form className='form_login'  onSubmit={signIn}>
                            <div>
                                
                                <input type='email' placeholder='email'  value={email} 
                                onChange={(e)=> setEmail(e.target.value)}/>
                                <input type='password' placeholder='palavra-passe' value={password}
                                onChange={(e)=> setPassword(e.target.value)} />
                                <button type="submit"  >login </button>
                            </div>
                        </form>
                        <p> or social plataform  </p>   
                        <div className='container1'>

                            <div className='optional_facebook' onClick={()=> alert('facebook')} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
                                        1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 
                                        2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> 
                                </svg>
                            </div>
                            <div className='optional_google'onClick={handleGoogle} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284
                                        2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301
                                        4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> 
                                </svg>
                            </div>     
                        </div>
                            
                        <div className='inscrever'>
                            
                            Não tem conta?
                            <Link className="Registra-se " to="/registrar"> Registra-se</Link>
                        </div>
                    </div>
                    
                </div>
           </div> 
    )}
export default Signin;

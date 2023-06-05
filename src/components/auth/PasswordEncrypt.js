import React, {useRef}  from 'react'
import bcrypt from 'bcryptjs'

function PasswordEncrypt(){
    const emailRef=useRef();
    const passwordRef=useRef();
    const sign =(e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const hashedPassord = bcrypt.hashSync(password,10  )
         
        console.log(hashedPassord)
    }
    return(
        <form>
            <input type='email' ref={emailRef}/>
            <input type='password' ref={passwordRef}/>
            <button type="submit"  >sign up</button>
                           
        </form>
    )
}export default PasswordEncrypt
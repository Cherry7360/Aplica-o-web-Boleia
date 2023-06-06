import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { signInWithPopup ,signOut,AuthStateChanged} from "firebase/auth";

const AuthContext = createContext()

 export function AuthContextProvider({ children }) {
    const [user, setCurrentUser] = useState()
  
    const signInGoogle=()=>{
        const provider= new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result)
          }).catch((error)=>{
            alert('erro google signin')
          })
       }
    useEffect(() =>   {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setCurrentUser(currentUser)
            console.log('user', currentUser)
        })

        return unsubscribe
    }, [])
    const LogOut=()=>{
        signOut(auth)
    }
    return (
        <AuthContext.Provider value={{
            signInGoogle,
            LogOut,
            user,emailGoogle,nameGoogle,porfilePicGoogle
        }} >
            {children} 
        </AuthContext.Provider>
    )}
    export function UserAuth() {
        return useContext(AuthContext)
      } 

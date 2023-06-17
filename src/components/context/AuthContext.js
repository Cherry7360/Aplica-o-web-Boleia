import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { GoogleAuthProvider,signInWithPopup ,signOut,onAuthStateChanged} from "firebase/auth";

const AuthContext = createContext()

 export function AuthContextProvider({ children }) {
    const [user, setCurrentUser] = useState()
   
    const [emailGoogle,setEmailGoogle]= useState()
    const [nameGoogle,setNameGoogle]= useState()
    const [porfilePicGoogle,setPorfilePicGoogle]= useState()
    const signInGoogle=()=>{
        const provider= new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            setNameGoogle(result.user.displayName)
            setEmailGoogle(result.user.email)
            setPorfilePicGoogle(result.user.photoURL)
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
            user,
            emailGoogle,
            nameGoogle,
            porfilePicGoogle
        }} >
            {children} 
        </AuthContext.Provider>
    )}
    export function UserAuth() {
        return useContext(AuthContext)
      } 

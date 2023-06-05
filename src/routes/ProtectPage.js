import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from'../components/context/AuthContext'
function ProtectPage({children}){
    const {user}=UserAuth
     if(!user){
        return <Navigate to='/'/>
     }
     else
    return(children)
}export default ProtectPage
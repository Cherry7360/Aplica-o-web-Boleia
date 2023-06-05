import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function  Principal(){
    return(
        <>
        <Navbar/>
        <Outlet/>
       
        </>
    )
}
export default Principal
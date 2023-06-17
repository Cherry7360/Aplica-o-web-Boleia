//import { auth,db } from "../../firebase";
function Formvalidation(userData){

    const erros ={};
   
    if(!userData.username){
        erros.username="Obrigatório preencher o campo!"
    }
    if(!userData.email){
        erros.email="Obrigatório preencher o campo!"
    }
    if(!userData.password){
        erros.email="Obrigatório preencher o campo!"
    }
    else if(!/\S+@\S+\.\S+/.test(userData.email)){
        erros.email= "Email inválido"
    }
    if(!userData.password){
        erros.password="Obrigatório preencher o campo!"   
    }
    else if(userData.password.length <8 ){
        erros.password= "Número minimo é 8 carateres"
    }
    if(!userData.confirmPassword){
        erros.confirmPassword="Obrigatório preencher o campo!"   
    }
    else if( userData.password !== userData.confirmPassword){
        erros.confirmPassword= "no macth"
    }
    else if(userData.password<8 || userData.confirmPassword<8){
        erros.password= "Número minimo é 8 carateres"
    }
    return erros;
}export default Formvalidation

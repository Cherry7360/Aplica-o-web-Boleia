import './Forms.css'
import {React,useState} from 'react'
function Forms(){
    const [userCarona, setUserCarona]=useState({
        partida:'',
        destino: '',
        data:'',
        tempo:''
    })
    const handleChangeCarona=(event)=>{
        
        let value= event.target.value;
        let name = event.target.name;
        setUserCarona((prevalue)=>{
            return{
                ...prevalue,
                [name]: value
            }
        })
        console.log(userCarona)
       
    }
    

    return(
        <div className='container-carona'>
        <div> 
            <div className='publicar'>
                <h2>Publicar Carona</h2>
            </div>
            <form className='forms-carona'>
                <div>
                <label>Origem</label>
                            <input type='text'   placeholder='Local de origem' name='partida'onChange={handleChangeCarona } value={userCarona.partida}/>

                            <label> Destino</label>
                            <input type='text'  placeholder='Local de chegada' name='destino' onChange={handleChangeCarona } value={userCarona.destino}/>

                            <label> Data</label>
                            <input type='date'  placeholder='Introduz a data' name='data' onChange={handleChangeCarona } value={userCarona.data}/>
 
                            <label> horario </label>
                            <input type='time'placeholder='Hora de partida' name='tempo' onChange={handleChangeCarona } value={userCarona.tempo}/>
                </div>
            </form>
            <div className='btns'>
                <button  >Voltar</button>
                <button type="submit"  >continuar</button>
           
            </div>
        </div> 
    </div>
       
    )

}export default Forms

import {UserAuth} from'../components/context/AuthContext'
function Home(){
    const {user,emailGoogle,nameGoogle,porfilePicGoogle}= UserAuth()
    return(
        <>
            <h1>Home Page</h1>
          
            
        
       
        </>
    )
}
export default Home
/*    <p>{nameGoogle}</p>
         <img src={porfilePicGoogle} alt='porfile'/> */
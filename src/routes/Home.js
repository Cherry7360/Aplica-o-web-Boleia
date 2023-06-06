import {UserAuth} from'../components/context/AuthContext'
function Home(){
    const {emailGoogle}= UserAuth()
    return(
        <>
            <h1>Home Page</h1>
          
            <p>Email user:  {emailGoogle}</p>
        
       
        </>
    )
}
export default Home
/*    <p>{nameGoogle}</p>
         <img src={porfilePicGoogle} alt='porfile'/> */

import Header from "../component/Header/Header"

import { Outlet } from "react-router-dom"
import Footer from "../component/Footer/Footer"
const RootLayout =()=>{

    return <> 

    
   
        <Header/>
      

        <Outlet/>
        <Footer/>
        
    
    
      
   
   

  
    

        
    
    

    </>
}
export default RootLayout
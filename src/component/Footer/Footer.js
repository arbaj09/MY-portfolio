 import './Footer.css'
 import { Link } from 'react-router-dom'
  import geet from '../Asset/GitHub-logo.png'
  import linkedin from '../Asset/LinkedIn.png'
  import gmail from '../Asset/gmail.png'


 const Footer =()=>{
    return <div className=" footer-container">
        <div className='footer-conect'>
            <h1>Conect with Us</h1>
            <hr></hr>
            <span>arbaaz.sh001@gmail.com
           
            </span>
            
            
        </div>
        <footer className="footer-main">
            <div className='GIT'>
                <Link to='https://github.com/arbaj09?tab=repositories'>
                <img src={geet} height="90" width='90' alt='images'/></Link>
            </div>
            <div className='linkedin' >
                <Link to='https://www.linkedin.com/in/arbaj-shaikh-140110201/'>


            <img src={linkedin} height="90" width='90' alt='images'/></Link>
            </div>
          
           
           
        </footer>

    </div>
 }
 export default Footer
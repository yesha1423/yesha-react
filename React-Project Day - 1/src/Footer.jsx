
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";



function Footer(){
    return(
        <div>

        <footer>
                {/* <p style={{backgroundColor:"#000",color:"#fff",height:"75px",lineHeight:"75px",textAlign:"center"}}>Copyright &copy; {2024} <b>Yesha Rathwa</b></p> */}
        
            <ul style={{backgroundColor:"#000",color:"#fff",height:"75px",lineHeight:"75px",textAlign:"center"}}>Copyright &copy; {2024} <strong>Yesha Rathwa</strong>

          <a href="https://www.facebook.com" style={{color:"blue"}}> 
            <MdFacebook />
        </a>

          <a href="https://www.instagram.com">
            <AiOutlineInstagram />
          </a>
  
          <a href="https://www.snapchat.com">
            <BiLogoSnapchat />
          </a>
 
          <a href="https://www.whatsapp.com" style={{color:"blue"}}>
            <BiLogoWhatsapp />
          </a>

          <a href="https://www.twitter.com">
          <AiFillTwitterCircle />

          </a>
     
      </ul>
    
        </footer>
        </div>
    )
}

export default Footer;
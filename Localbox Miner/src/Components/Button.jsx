import React, { useContext} from 'react'
import { themeContext } from '../context/ThemeContex'
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Button = () => {
    const {themeupdaterfunction,theme} = useContext(themeContext)
  return (
    <div>
          <button style={{marginTop:"25px",backgroundColor:theme=="light"?"white":"black",color:theme=="light"? "black":"white",borderRadius:"30px"}} onClick={themeupdaterfunction}>
               {theme=="light"?<IoMdMoon/>:<MdWbSunny/>}
          </button>             
    </div>
  )
}


export default Button


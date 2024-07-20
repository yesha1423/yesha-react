import React from 'react'
import{NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{backgroundColor:"black",height:"60px",lineHeight:"35px"}}>
        <div style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
          <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/"}>
          HOME
          </NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/about"}>
          ABOUT 
          </NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/login"}>
          LOGIN
          </NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/product"}>
          PRODUCT
          </NavLink>
        </div>
    </div>
  )
}


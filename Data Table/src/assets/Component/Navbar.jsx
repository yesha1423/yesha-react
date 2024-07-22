import React from 'react'
import{NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{backgroundColor:"black",height:"50px"}}>
        <div style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
          
        <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/"}>
          Home
          </NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {color:"red"} : {color:"white"} 
          }}
          to={"/about"}>
          About
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


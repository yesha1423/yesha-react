import React from 'react'

const PrivatePage = ({children}) => {
  const isAuth = localStorage.getItem("token")
  
  if(!isAuth){
    alert("you're not got token")
    window.location.href="/login"
  }
  
    return children
  
}

export default PrivatePage 
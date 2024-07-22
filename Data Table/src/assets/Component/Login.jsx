import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handleclick=(e)=>{
      e.preventDefault()
      let userdata={
        email,
        password
      }
    


    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromreqres = res.data.token 
      localStorage.setItem("token",tokenfromreqres)
    }).catch((err)=>console.log(err))
  }

    return (
    <div>
            <h1>This is Login page</h1>
            <input type='email' onChange={(e)=>setemail(e.target.value)}/> <br/>
            <input type='password' onChange={(e)=>setpassword(e.target.value)}/> <br />

            <button onClick={handleclick}>SUBMIT</button>
    </div>
  )
}

export default Login
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DescriptionPage = () => {
const [data,setdata]=useState({})
const {id}=useParams()

const getdata=()=>{
    axios.get(`http://localhost:3000/Product/${id}`).then((res)=>setdata(res.data))
    .catch((err)=>console.log(err))
}
useEffect(()=>{
    getdata()
},[])

  return (
    <div>
        <h1>DescriptionPage</h1>
        <div>
            <h3>{data.id}</h3>
            <h2>{data.title}</h2>
            <img src={data.image} height={200} width={200}></img>
            <h3>{data.price}</h3>
            <h2>{data.category}</h2>
            <p>{data.description}</p>
        </div>

    </div>
  )
}

export default DescriptionPage
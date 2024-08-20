import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initialvalue={
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
}

const Edit = () => {
  const{id}=useParams()
  
const [formdata,setformdata]=useState(initialvalue)

const {image,title,description,price,category} = formdata
const handlechange=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
}
const handlesubmit=(e)=>{
    e.prevantdefault()
    axios.put(`http://localhost:3000/Product/${id}`,formdata).then((res)=>{console.log(formdata)
    alert("data updated!!")}).catch((err)=>console.log(err))
}
const getfundata=()=>{
    axios.get(`http://localhost:3000/Product/${id}`).then((res)=>{setformdata(res.data)
    }).catch((err)=>console.log(err))
}

useEffect(()=>{
    getfundata()
},[])
  return (
    <div>
       <h1> EDIT PAGE</h1>
        <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
          <input name="image" value={image} type="text" placeholder="Image" /> <br />
          <input name="title" value={title} type="text" placeholder="title" /> <br />
          <select name="category" value={category}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select> <br />
          <input name="price" value={price} type="text" placeholder="Price" /> <br />
          <input name="description" value={description} type="text" placeholder="description" /> <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Edit
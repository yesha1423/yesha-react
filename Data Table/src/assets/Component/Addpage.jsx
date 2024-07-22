import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

  const inisialvalue={
    title:"",
    price:0,
    description:"",
    category:"",
    image:""
  }
  const [formdata,setformdata]=useState(inisialvalue)

  const {title,price,category,description,image}=formdata

  const handlechange=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault()

    axios.post("http://localhost:3000/product",formdata).then((res)=>{
      console.log(res,data)
      alert("Data Added")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <h1>Welcome to AddProduct Page</h1><br /><br />
        <form onSubmit={(e)=>handlesubmit(e)}>
          <input name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder="Image" /> <br />
          <input name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder="title" /> <br />
          <select name='category' value={category} onChange={(e)=>handlechange(e)}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder="Price" /> <br />
          <input name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder="description" /> <br />
          <input type="submit" />
        </form>
    </div>
  )
}

export default AddProduct
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Product = () => {  
const [data,setdata]=useState([])
const [page,setpage]=useState(1)

function getdatafun(){
  axios.get("http://localhost:3000/Product",{
    params:{
      _page:page,
      _limit:3
    }
  })
  .then((res)=>setdata(res.data))
  .catch((err)=>console.log(err))
} 
useEffect(()=>{
  getdatafun()
},[page])

  return (
    <div>    
    <h1>This is Product page</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((el)=>(
        <div key={el.id} style={{border:"2px solid black",margin:"10px 10px"}}>
          <h3>{el.category}</h3>
          <Link to={`/singlepage/${el.id}`}>
            <img src={el.image} height={200} width={200}/>
          </Link>
            <h4>{el.title}</h4>
            <h4>{el.price}</h4> 
        </div>
      ))}
      </div>
      <button disabled={page==1} onClick={()=>setpage(page-1)}>-</button>
      <span>{page}</span>
      <button disabled={page==7} onClick={()=>setpage(page+1)}>+</button>
    </div>
  )
}
export default Product


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {  
const [data,setdata]=useState([])
const [categoryoption, setcategoryoption] = useState(null)
const [page, setpage] = useState(1)
const [order, setorder] = useState(null)
const [search,setsearch]=useState("")
console.log(categoryoption)

function getdatafun(){
  axios.get("http://localhost:3000/Product",{
    params:
    {
      _page: page,
      _limit: 5,
      category: categoryoption,
      _sort: "price",
      _order: order,
      q:search
    }
  })
  .then((res)=>setdata(res.data))
  .catch((err)=>console.log(err))
} 

const handledel=(id)=>{
  axios.delete(`http://localhost:3000/Product/${id}`)
  .then((res)=>{
    alert("Deleted!!")
    getdatafun()
  })
  .catch((err)=>console.log(err))
}

useEffect(()=>{
  getdatafun()
},[page, categoryoption, order, search])
 
return(
  <div style={{color:"#000000"}}>    
  <h1>This is Product page</h1>
  <hr  style={{padding:"5px"}}/>
  <div style={{display:"flex",justifyContent:"space-around"}}>
    <div style={{margin:"20px"}}>
      <select name="" id="" onChange={(e) => setcategoryoption(e.target.value)} style={{color:"grey"}}>
        <option value="">Select</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="electronics">electronics</option>
      </select>
    </div>
      <div className='search' style={{margin:"20px"}}>
        <input type="text" placeholder='search'onChange={(e)=>setsearch(e.target.value)}/>

      </div>
    <div className='btn' style={{padding:"20px"}}> 
      <button onClick={() => setorder("asc")}>LOW TO HIGH</button>
      <button onClick={() => setorder("desc")}>HIGH TO LOW</button>
    </div>
    </div>

  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
     {data.map((el)=>(
      <div key={el.id} style={{border:"2px solid black",margin:"10px 10px"}}>
      <h3>{el.category}</h3>
      <Link to={`/singlepage/${el.id}`}>
        <img src={el.image} height={200} width={200}/>
      </Link>
        <h4>{el.title}</h4>
        <h4>{el.price}</h4> 
        <br /><br />
        <button><Link to={`/edit/${el.id}`}>EDIT</Link></button>
        <button onClick={(e)=>handledel(el.id)}>DELETE</button>
   </div>

   
     ))}
    
    </div>
    <button onClick={()=>setpage(page-1)}>-</button>
    <span>{page}</span>
    <button onClick={()=>setpage(page+1)}>+</button>
    </div>
)}

export default Product
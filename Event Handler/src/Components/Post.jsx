import React, { useEffect, useState } from 'react'

const Post = () => {
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)

    function fetchdata(){
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchdata()
    },[page])
    
  return (
    <div style={{alignItems:"center"}}>
        {data.map((el)=>(
            <div className='cnt' style={{height:"250px",width:"570px", border:"3px solid #6F4E37",backgroundColor:"#A67B5B",borderRadius:"5px",margin:"auto",marginTop:"52px",textAlign:"center",alignItems:"center"}}>
                <h2 style={{fontSize:"27px",fontWeight:"220px",color:"#F6E9B2"}}>
                    {el.title}
                </h2>
                <p style={{fontSize:"18px",fontWeight:"500px",color:"#543310"}}>
                    {el.body}
                </p>
            </div>
        ))}
        <br></br>

        <button style={{height:"40px",width:"60px",backgroundColor:"#D8AE7E",border:"1.5px solid #543310",borderRadius:"10px"}} disabled={page==0} onClick={()=>setpage(page-1)}>-</button>
        &nbsp; &nbsp;
        <span>{page}</span>
        &nbsp; &nbsp;
        <button style={{height:"40px",width:"60px",backgroundColor:"#D8AE7E",border:"1.5px solid #543310",borderRadius:"10px"}} onClick={()=>setpage(page+1)}>+</button>
    </div>
  )
}

export default Post
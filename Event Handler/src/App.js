import './App.css';
import Post from './Components/Post';
import { useState } from 'react';

function App() {
  const [toggle,settoggle]=useState(false)
  return (
    <div className="App">
      <h3 style={{color:"#FED8B1",backgroundColor:"#AF8F6F",border:"1.5px solid #543310",fontSize:"13px",height:"45px",width:"250px",borderRadius:"10px",margin:"auto",marginTop:"10px",lineHeight:"45px"}} onClick={()=>settoggle(!toggle)}>{toggle?"RETURN":"GET POSTS"}</h3>
      {toggle ? <Post /> : ""}
    </div>
  );
}

export default App

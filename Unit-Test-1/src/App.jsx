import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0);

  function CheckPrime() {
    let factor = 0;
    for (let i = 1; i <= count; i++) {
      if (count % i == 0) {
        factor++;
      }
    }
    if (factor == 2) {
      return "true";
    } else {
      return "false";
    }
  }

  return (
    <div style={{ textAlign: "center" }}>

      

      <div className="form animated-border-box">

     <div className="inform" style={{color:"#000",border:"2px solid black",padding:"40px",borderRadius:"20px",backgroundColor:"cyan"}}>
     <h2 className="h1" style={{fontFamily:"cursive",color:"white",border:"1px solid black",padding:"20px",borderRadius:"20px",backgroundColor:"lightgreen"}}>Welcome to Counter 2.0</h2>
     <br/>
          <button
            style={{ padding: "10px 15px", margin: "0 8px",border:"1px solid black",backgroundColor:"red" }}
            disabled={count == 0}
            onClick={() => setcount(count - 1)}
          >
            -1
          </button>
          <button style={{ padding: "10px 15px",fontFamily:"cursive"}} onClick={() => setcount(0)}>
            Reset Count
          </button>
          <button
            style={{ padding: "10px 15px", margin: "0 8px",border:"1px solid black",backgroundColor:"red" }}
            onClick={() => setcount(count + 1)}
          >
            +1
          </button>
          
          <h2 style={{color:"black",border:"1px solid black",backgroundColor:"white", borderRadius:"50%",padding:"30px"}}>Count : {count}</h2>
          
          <h3 style={{color:"#000"}}>This Number is : {count % 2 == 0 ? "Even" : "Odd"}</h3>
          <h3 style={{color:"#000"}}>Prime Number is : {CheckPrime()}</h3>
     </div>

      </div>
      
    </div>
  );
}
export default App

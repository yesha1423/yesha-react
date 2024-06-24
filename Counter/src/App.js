import { useState } from "react";

export default function App() {
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

      <div class="shape">
          <div class="shape1"></div>
          <div class="shape2"></div>
      </div>

      <div className="form animated-border-box">

     <div className="inform">
     <h2 className="h1" style={{fontFamily:"cursive"}}>Welcome to Counter 2.0</h2>
     <br/>
          <button
            style={{ padding: "10px 15px", margin: "0 8px" }}
            disabled={count == 0}
            onClick={() => setcount(count - 1)}
          >
            -1
          </button>
          <button style={{ padding: "10px 15px",fontFamily:"cursive" }} onClick={() => setcount(0)}>
            Reset Count
          </button>
          <button
            style={{ padding: "10px 15px", margin: "0 8px" }}
            onClick={() => setcount(count + 1)}
          >
            +1
          </button>
          
          <h2 style={{color:"white"}}>Count : {count}</h2>
          
          <h3 style={{color:"white"}}>This Number is : {count % 2 == 0 ? "Even" : "Odd"}</h3>
          <h3 style={{color:"white"}}>Prime Number is : {CheckPrime()}</h3>
     </div>

      </div>
      
    </div>
  );
}
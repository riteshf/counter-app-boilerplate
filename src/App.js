import { useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter] = useState(0)

  const handelChange = (value)=>{
     setCounter(counter+value)
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button" disabled={counter==0?true:false} onClick={()=>{if(counter>0)handelChange(-1)}}>Dec Count</button>
      <button data-testid="counter-increment-button" onClick={()=>{handelChange(1)}} >Inc Count</button>
    </div>
  );
}

export default App;

import React ,{useState}from "react"

function App() {
  let [counter,setCounter]=useState(15)
  const addVal=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    else{
      setCounter(counter)
    }
    
  }
  const removeVal=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    else{
      setCounter(counter);
    }
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter{counter}</h3>
      <button onClick={addVal}>Add Val{counter}</button>
      <button onClick={removeVal}>Remove Val{counter}</button>
    </>
  )
}

export default App

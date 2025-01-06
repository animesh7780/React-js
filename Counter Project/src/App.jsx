import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter+1)
    //interview prospective question increae value 4 times
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
    if(counter >= 20){
      setCounter(0)
    }
  }

  const subtractValue = () => {
    //counter = counter - 1
    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Subtract Value</button>
      <br />

    </>
  )
}

export default App

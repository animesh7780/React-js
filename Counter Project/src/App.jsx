import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    //counter = counter - 1
    setCounter(counter - 1)
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

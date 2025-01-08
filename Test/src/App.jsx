import { useState} from 'react'
import './App.css'

function App() {

  const click = "click me"

  // const[click, setClick] = useState("Click me")
  const [color, setColor] = useState("red")

  const handleClick = () => {
    setColor("green")
  }

  return (
    <>
      <div style={{backgroundColor: color}}></div> 
      <button onClick={handleClick}>{click}</button>
    </>
  )
}

export default App

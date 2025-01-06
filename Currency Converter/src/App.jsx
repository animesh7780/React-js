import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-green-400 text-3xl font-bold text-center text-indigo-500 mb -4">Currency Converter</h1>
    </>
  )
}

export default App

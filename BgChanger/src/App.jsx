import { useState } from "react"

function App(){

  const [color, setColor] = useState ("olive")
  return(
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => setColor("red")} className="w-24 h-24 rounded-full bg-red-500"></button>
            <button onClick={() => setColor("green")} className="w-24 h-24 rounded-full bg-green-500"></button>
            <button onClick={() => setColor("blue")} className="w-24 h-24 rounded-full bg-blue-500"></button>
            <button onClick={() => setColor("yellow")} className="w-24 h-24 rounded-full bg-yellow-500"></button>
            <button onClick={() => setColor("black")} className="w-24 h-24 rounded-full bg-black"></button>
            <button onClick={() => setColor("white")} className="w-24 h-24 rounded-full bg-white"></button>
            <button onClick={() => setColor("olive")} className="w-24 h-24 rounded-full bg-olive"></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
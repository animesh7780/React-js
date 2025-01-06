import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8) 
  const [number, numberAvailable] = useState(false)
  const [characters, charactersAvailable] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  const passwordGenerator  = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number) str += '0123456789'
    if(characters) str += '!@#$%&*{}'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, characters, setPassword])

  useEffect(()=>{
    passwordGenerator() 
  },[length, number, characters])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-200'>
        <div className='text-center p-4 flex shadow-md rounded-lg bg-white'>
          <input type=" text" 
          value={password} 
          className='flex-grow outline-none' 
          placeholder='Password' 
          readOnly
          ref={passwordRef} 
          />
          <button 
          onClick={copyPasswordtoClipboard}
          className='bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded'>
            Copy
          </button>
        </div>
        <div className='flex text-center text-sm space-x-2 px-2 py-4'>
            <div className='flex items-center space-x-1'>
              <input type="range" 
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <span>{length}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <input type="checkbox" checked={number} onChange={(e) => numberAvailable(e.target.checked)}/>
              <span>Numbers</span>
            </div>
            <div className='flex items-center space-x-1'>
              <input type="checkbox" checked={characters} onChange={(e) => charactersAvailable(e.target.checked)}/>
              <span>Characters</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default App

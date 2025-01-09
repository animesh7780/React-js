import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(''); 
  const [inputColor, setInputColor] = useState(''); 

  const handleClick = () => {
    setColor(inputColor); 
  };

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <input
          type="text"
          placeholder="Enter color"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
        />
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;

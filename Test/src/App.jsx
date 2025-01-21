import { useState, useEffect, useCallback } from 'react';

function App() {
  const url = 'https://www.google.com/search?q=';
  const [input, setInput] = useState('');

  // useEffect to log changes to the input
  useEffect(() => {
    if (input) {
      console.log(`User input changed to: ${input}`);
    }
  }, [input]);

  // useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    if (!input) {
      alert('Chal Bhag jaa yahan se');
      return;
    }
    const completeUrl = url + input;
    window.open(completeUrl, '_blank');
  }, [input]); // Dependency array ensures handleClick is recreated only when `input` changes

  return (
    <div>
      <input
        className="border border-black/10 rounded-lg px-3 py-1.5 items-center"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter search term"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default App;

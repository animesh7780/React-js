import { useState } from 'react';

function App() {
  const url = 'https://www.google.com/search?q='
  const [input, setInput] = useState('');

  const handleClick = () => {
    const completeUrl = url + input; 
    window.open(completeUrl, '_blank'); 
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default App;

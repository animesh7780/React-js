import {useState} from 'react';
import './App.css';
import Card from './Components/Card';
function App() {

  const[count, setCount] = useState(0)
  // let myObj = {
  //   name: "John",
  //   age: 25,
  // }

  // let newArray = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    <h1 className="bg-green-400 text-3xl font-bold text-center text-indigo-500 mb -4">Taliwind Test</h1>
    <Card channel = "React" username = "Ani"/>
    <Card channel = "Next"  username = "Shutiya"/>
    </>
  );
}

export default App;

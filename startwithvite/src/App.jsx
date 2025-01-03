import First from "./first"

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const username = "Ani"

function App() {
  return (
    <>
    <First/>
    <MyApp/>
    <h1>Hello</h1>
    <h2>Badhiya Sab</h2>
    <h3>Ab banega project wit react wit {username}</h3>
    <p>This is a paragraph</p>
    <br />
    <hr />
    <input type="text" placeholder="Enter your name" />
    </>
  )
}

export default App

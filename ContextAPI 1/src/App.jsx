import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Welcome</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

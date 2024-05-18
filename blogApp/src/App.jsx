import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITEE_URL);
  return (
    <>
      <h1>React with appwrite which is similer to google firebase</h1>
    </>
  )
}

export default App

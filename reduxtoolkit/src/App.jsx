import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <h1>Learn about Redux-Tool-Kit {count}</h1>
     <AddTodo />
     <Todos />
    </div>
  )
}

export default App
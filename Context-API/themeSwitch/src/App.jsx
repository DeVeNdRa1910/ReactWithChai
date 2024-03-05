import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Here we need theme button component */}
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* Here we need Card component*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

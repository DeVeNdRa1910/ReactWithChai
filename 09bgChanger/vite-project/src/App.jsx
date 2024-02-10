import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    {/* here we are using inline css by style={{}} */}
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          
          <button onClick={()=>setColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "brown"}}>Brown</button>
          
          <button onClick={()=>setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>Grey</button>
          
          
          <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
          
          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          
          <button onClick={()=>setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "violet"}}>Violet</button>
          
          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          
          <button onClick={()=>setColor("hotpink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "hotpink"}}>Hotpink</button>

          <button onClick={()=>setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "indigo"}}>Indigo</button>
        </div>
      </div>
    </>
  )
}

export default App

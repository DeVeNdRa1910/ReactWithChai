import { useEffect, useState } from 'react'
import './App.css'
import { ThemePreovider } from './Context/theme'
import ThemeBtn from './components/Themebutton'
import Card from './components/Card'

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(()=>{
    const htmlClasslist = document.querySelector('html').classList;
    htmlClasslist.remove("light" , "dark")
    htmlClasslist.add(themeMode)
  } , [themeMode])
 
  return (
    <ThemePreovider value={{themeMode , darkTheme ,  lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemePreovider>
  )
}

export default App

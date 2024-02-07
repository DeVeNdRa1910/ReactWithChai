import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {

  const myObj = {
    name:"Wanda",
    age:30,
  }

  let newArr = [1,2,3,4,5]

  const [count, setCount] = useState(0)

  return (
    <>
      {/* in jsx class is reserv in JS if you want use it for html then you can use className , htmmlFor...... 
      make every tag as closing tag*/}
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind Test</h1>

      <Card userName="chaiAurReact" btnText='click Me'/>
      <Card userName="sexy" btnText='Visit Me'/>
      <Card userName="sexy Wandaa" btnText='Watch Profile'/>
      <Card userName="I Love You Wandaa" btnText='Go for Visit Profile'/>
      {/* now we have multiple cards buit same value(names , descriptions)
      So deal for deal with we have props */}
    </>
  )
}

export default App

/* 
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0       dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="src\assets\wallpaperflare.com_wallpaper.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // for change State we are using useState(default Value)
  // default value can be anything "",[],true,false,0,-ve,+ve.........
  // useState returning  2 thing thats why we catch them into an array. first is variable and second is method(function). name of function can be anything but usually we give name according to variable [count , setCount] , [loggedin , setLoggedin] ..... this methode control the variable

  //const counter = 15;
  let [counter , setCounter] = useState(0)  // hooks
    
  //when counter update then setCounter update that variable in entire page

/*   const addValue = () => {
    console.log("Increase" , counter);
    counter = counter + 1
    // counter update nahi ho raha hai
  }
  
  const decreaseValue =() =>{
    console.log("Decrease" , counter);
    counter = counter-1;
    // counter update nahi ho raha hai
  } */

  const addValue = () => {
    if(counter == 20){
      return;
    }
    counter = counter + 1
    console.log("Increase" , counter);
    // counter update nahi ho raha hai
    setCounter(counter);
  }
  
  const decreaseValue =() =>{
    if(counter == 0){
      return;
    }
    counter = counter-1;
    console.log("Decrease" , counter);
    // counter update nahi ho raha hai
    setCounter(counter);
  }

  // Here concept of hooks is coming

  /* React mein "hooks" ek prakar ke functions hote hain jo hume class components ke bina bhi state aur lifecycle features ka istemal karne ki anumati dete hain. Yeh hume functional components mein state, lifecycle methods, aur dusre React features ka istemal karne ki anumati deta hai. */

  return (
    <>
      <h1>React With chai</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={decreaseValue}>decrease value: {counter}</button>
    </>
  )
}

export default App

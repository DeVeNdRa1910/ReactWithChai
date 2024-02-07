import Chai from "./chai";
function App() {

  //use of variable (created in side App) in return 
  const userName = "Devendra";


  return (


    <>
      <h1>Chai aur React With vite | DV</h1>
      <h2>username : {userName}</h2>
      {/* use you can pass finale evalution of Js in {} not javaScript */}
      {/* this(present insideb {}) is known as evaluated expression */}
      <Chai />
    </>
    // here we can return only one element, we have to return more then one element there for we return all element after bindin in a single tag <>
    /* 
    <>
    -------
    -------
    </>
    */
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

/* const ReactElement = {
  type : "a",
  props : {
      href: "https://google.com",
      target: "_blank"
  },
  children: 'Click me to visit google'
} */

//Now we are creating element acoording to render of React. React is providing a method for that called "React.creatElement"
/* const ReactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit Google'
)
 */
const anotherElement = (
  // Render Of React can handel this type of element easly
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// render of react is converting element intp Object. like that

const anotherUser = "jaybant vishwakarma";
// Inside render we can use only evaluted expression
const reactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit Google',
  anotherUser
)

//this anotherUser Directly injectded inside render

ReactDOM.createRoot(document.getElementById('root')).render(
/* // React.StrictMode is not neccessory   
  <React.StrictMode>
    <App />
  </React.StrictMode>, */

  // <App/>
  //<Chai/>
  //<MyApp/>

  /* ReactELement Nahi chalega bcz In custom React we are  renderFunction is writtenn according to this object But in original react entire picture is different */
  reactElement

  // anotherElement

  // ReactElement

)

//if App is a function then we can creat function here. lets try this
function MyApp(){
  return(
    <>
      <h2>Buy coffee for Devendra (Custom App)</h2>
    </>
  )
}


// you can refer https://github.com/facebook/react/tree/main
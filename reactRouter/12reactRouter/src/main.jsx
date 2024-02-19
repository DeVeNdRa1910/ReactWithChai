import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home/>,
//         // / ke bad kuchh nahi likha to Home page rander hoga
//       },
//       {
//         path: "about",
//         element: <About />,
//         //  / ke baad about likha to about page rander hoga
//       },
//       {
//         path: "ContactUs",
//         element: <ContactUs />
//       },
//     ],
//   }
// ])

// second method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      < Route path='' element={<Home />} />
      < Route path='about' element={<About />}/>
      < Route path='contactus' element={<ContactUs />}/>
      < Route path='user/:userid' element={<User />}/>
      {/* userid ka access hame directly User.jsx me mil jayga */}
      < Route 
        path='github' 
        element={<Github />}
        // we can make api call directly from here by loader, when we hovering mousex on Github then api will called before click and affter hover, make call in side callback loader={()=>{}}
        loader={githubInfoLoader}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)

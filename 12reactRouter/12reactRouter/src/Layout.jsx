import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
     {/* // Header same rahega footer same rahega in dono ke beech ka stuff change hoga  */}
    </>
    // jaha per bhi outlate denege un stuff ko ham change kar sakte hai 
    //like ham web page me header or footer ko same rakhna chahte hai and jo dono ke beech ka portioin hai use change karna chahte hai (Home , AboutUs , .....)
  )
}

export default Layout

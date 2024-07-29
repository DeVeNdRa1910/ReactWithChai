import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <header className="py-2 shadow text-white bg-orange-500 bg-opacity-60 backdrop-blur-lg fixed w-full z-20">
        <Container>
          <nav className="flex items-center justify-between">
            <div className="mr-4">
              <Link to="/">
                <Logo width="50" />
              </Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none text-3xl"
              >
                {menuOpen ? <GiCrossMark/> : <TiThMenu/>}
              </button>
            </div>
            <ul className="hidden lg:flex lg:items-center lg:gap-2 ml-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name} className="mt-2 lg:mt-0">
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-black rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li className="mt-2 lg:mt-0">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw] bg-orange-500 bg-opacity-60 backdrop-blur-lg text-white z-30 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className=" fixed top-4 right-4 mb-[2vh]">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none text-3xl active:scale-90"
          >
            <GiCrossMark />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 mt-[4vh]">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name} className="mt-2">
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false); // Close menu after navigation
                    }}
                    className="inline-block px-6 py-2 duration-200 hover:bg-black rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          {authStatus && (
            <li className="mt-2">
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Header
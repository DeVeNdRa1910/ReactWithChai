import React from 'react'
import {Link, NavLink} from 'react-router-dom'  
//Link is use inplce of anchor(a) tag bcz a tag reloaded hall page
//NavLink is provide some addtional things as compare to Link
// inplace of href="" we write to=""
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                {/* Hame btana padega ki Nalink se kaha ja rahe hai with the help of to */}
                                <NavLink 
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    // here we are provide class inside a callback
                                    // when are using callBack inside NavLink then  we have access of a varible called isActive, isPending....etc these variable are use to identify  which page is active or which task is pending so that we can hilight that stuff.  konsa page active hai fir us page ko highlight kar dednge navbar ke andar ?-> true , :-> false
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    // here we are provide class inside a callback
                                    // when are using callBack inside NavLink then  we have access of a varible called isActive, isPending....etc these variable are use to identify  which page is active or which task is pending so that we can hilight that stuff.  konsa page active hai fir us page ko highlight kar dednge navbar ke andar ?-> true , :-> false
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contactus'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    // here we are provide class inside a callback
                                    // when are using callBack inside NavLink then  we have access of a varible called isActive, isPending....etc these variable are use to identify  which page is active or which task is pending so that we can hilight that stuff.  konsa page active hai fir us page ko highlight kar dednge navbar ke andar ?-> true , :-> false
                                >
                                    Contact-Us
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                to='/github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    // here we are provide class inside a callback
                                    // when are using callBack inside NavLink then  we have access of a varible called isActive, isPending....etc these variable are use to identify  which page is active or which task is pending so that we can hilight that stuff.  konsa page active hai fir us page ko highlight kar dednge navbar ke andar ?-> true , :-> false
                                >
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li className="hover:underline">
        <Link to={"/"}>Home</Link>
      </li>
      {/* All Product */}
      <li className="hover:underline">
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      {/* Signup */}
      <li className="hover:underline">
        <Link to={"/signup"}>Signup</Link>
      </li>
      {/* User */}
      <li className="hover:underline">
        <Link to={"/"}>Kamal</Link>
      </li>
      <li>
        <Link to={"/user-dashboard"}>Profile</Link> {/* User-Dashboard */}
      </li>
      {/* Admin */}
      <li>
        <Link to={"/admin-dashboard"}>Admin</Link> {/* Admin Dashboard */}
      </li>
      {/* logout */}
      {/* <li>
        </li> */}
      {/* Cart */}
      <li className="hover:underline">
        <Link to={"/cart"}></Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-800 opacity-80 w-full sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Bharat
            </h2>
          </Link>
        </div>
        {/* right  */}
        <div className="md:flex md:justify-between items-center md:px-3">
          <div className="right flex justify-center mb-4 lg:mb-0">
            {navList}
          </div>
          {/* Search Bar  */}
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

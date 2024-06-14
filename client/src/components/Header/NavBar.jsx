import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../utils/DarkModeToggle";
import Menu from "./Menu";
import { useState } from "react";


const NavBar = () => {

  const[isMenuOpen,setIsMenuOpen]=useState(false);

  return (
    <>
    <div>
        <button onClick={()=>setIsMenuOpen((prev)=>!prev)}  className="cursor-pointer md:hidden" >menu</button>
    </div>
        {isMenuOpen && <Menu  onCloseMenu={()=>setIsMenuOpen((prev)=>!prev)} />  }
        { !isMenuOpen &&
        <ul className="hidden md:flex md:items-center md:justify-evenly w-[100vh] px-4 font-bold " >
          
          <li className="hover:border-b-2  border-slate-800  dark:border-slate-100 py-0.5" > 
            <Link to="/">Home</Link>
          </li>
          <li  className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5 ">
            <Link to="/category">Category</Link>
          </li>
          <li  className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5">
            <Link to="/register">Register</Link>
          </li>
          <li  className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5">
            <Link to="/login">Login</Link>
          </li>
          <li  className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5">
            <Link to="/cart">Cart</Link>
          </li>
          <li >
            <DarkModeToggle />
          </li>
        </ul>
}
    </>
  );
};

export default NavBar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "../../utils/DarkModeToggle";

const Menu = ({onCloseMenu}) => {

    const navigate = useNavigate();
    const handleNevigation=(path)=>{
        onCloseMenu();
        navigate(path);
    }
    const handleCloseMenu=()=>{
        onCloseMenu();
    }

  return (
    <>
  <h1
        className="cursor-pointer font-bold text-4xl absolute z-50 right-8 top-2"
        onClick={handleCloseMenu}
      >
        X
      </h1>
      <div className=" fixed top-0 left-0 w-full h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white z-10">
    
        <ul className="flex flex-col gap-2 mt-12 items-center justify-evenly px-4 font-bold ">
          <li className="hover:border-b-2  border-slate-800  dark:border-slate-100 py-0.5"
        //   onClick={props.onCloseMenu(true)}
          onClick={()=>handleNevigation(`/`)}
          >
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5 "
         onClick={()=>handleNevigation(`/category`)}
         >
            <Link to="/category">Category</Link>
          </li>
          <li className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5"
          onClick={()=>handleNevigation(`/register`)}
          >
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5"
          onClick={()=>handleNevigation(`/login`)}
          >
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:border-b-2  border-slate-800 dark:border-slate-100 py-0.5"
          onClick={()=>handleNevigation(`/cart`)}
          >
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <DarkModeToggle />

          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

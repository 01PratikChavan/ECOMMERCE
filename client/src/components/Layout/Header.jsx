import React from 'react'
import NavBar from '../Header/NavBar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex items-center justify-between   shadow-md bg-gray-200 dark:bg-gray-800 p-4 h-20 px-8 ' >
    <div>
        <span>
         <Link to='/'>
         <h1>ECOMMERCE</h1>
         </Link> 
        </span>
      </div>
     <NavBar />
    </div>
  )
}

export default Header

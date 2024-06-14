// src/App.js
import React from 'react';
import './App.css';

import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';

const App = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen'>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/About' element={<About />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />

     <Route path='/*' element={<PageNotFound />} />


    </Routes>
    </div>  
)};

export default App;

import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from './Input'
import { useState } from 'react'
import FormFooter from './FormFooter'
import { ToastSuccess } from '../../utils/ToastNotification'
import { intitialFormDataLogin } from 
'../../utils/initialFormData'
import { useNavigate } from "react-router-dom";
const Login = () => {

  const[formData,setFormData]=useState(intitialFormDataLogin);
  const navigate=useNavigate();
  //  console.log(formData);
   
   const handleFormChange=(e)=>{
     setFormData((prev)=>( {...prev,
      [e.target.name]:e.target.value}))
   }

   const handleSubmitForm=(e)=>{
    e.preventDefault();
    if(
     !formData.email || 
     !formData.password ) 
     {
    alert(`Don't teach me Fields are empty`);
    return ;
   }
    setFormData(intitialFormDataLogin);
     console.log('Form submitted');
     ToastSuccess('Login Success')
     navigate('/');
     
    //  console.log(formData);
   }
  return (
    <Layout
     title='Login' description='Login Page for the user'
    >
    <form className="m-2 md:mb-4 mx-auto flex flex-col items-center gap-3 rounded-lg  bg-gray-200 p-4 shadow-xl md:dark:bg-gray-800 dark:bg-gray-700 md:w-[30vw]  "
    onSubmit={handleSubmitForm}
    >
      <h1 className="text-3xl my-1">Login</h1>

    
      <Input type="email" placeholder="Enter Your Email" label="Email" 
      id='email'
      value={formData.email}
      onChange={handleFormChange}
      />
      <Input type="password" placeholder="Password" label="Password" 
      id='password'
      value={formData.password}
      onChange={handleFormChange}
      />
      
    
        <FormFooter btnText='login' label='Not registered ? ' text='Register Here' link='register'  />
    </form>
  </Layout>
  )
}

export default Login

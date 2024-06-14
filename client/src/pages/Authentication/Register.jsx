import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import FormFooter from "./FormFooter";
import Input from "./Input";
import { intitialFormDataRegister } from "../../utils/initialFormData";
import { useNavigate } from "react-router-dom";
import { ToastSuccess, ToastWarning } from "../../utils/ToastNotification";
const Register = () => {

  const[formData,setFormData]=useState(intitialFormDataRegister);
  const navigate = useNavigate();
  //  console.log(formData);
   
   const handleFormChange=(e)=>{
     setFormData((prev)=>( {...prev,
      [e.target.name]:e.target.value}))
   }

   const handleSubmotForm=(e)=>{
    e.preventDefault();
    setFormData(intitialFormDataRegister);
     console.log('Form submitted');
     if(
      !formData.email.trim() || 
      !formData.name.trim() || 
      !formData.phone.trim() || 
      !formData.address.trim() || 
      !formData.password.trim() ) 
      {
     alert(`Don't teach me Fields are empty`);
     ToastWarning(`Don't teach me Fields are empty`);
     return ;
    }
     ToastSuccess('Register Success')
    //  console.log(formData);
    navigate('/login');
   }

  return (
    <Layout
    title='Register' description='Registration Page for the user'
    >
      <form className="m-2 md:mb-4 mx-auto flex flex-col items-center gap-3 rounded-lg  bg-gray-200 p-4 shadow-xl md:bg-gray-200 dark:bg-gray-800 md:w-[30vw]  "
      onSubmit={handleSubmotForm}
      >
        <h1 className="text-3xl my-1">Register</h1>

        <Input type="text" placeholder="Enter Your Name" label="Name" 
        id='name'
        onChange={handleFormChange}
        value={formData.name}
        />
        <Input type="email" placeholder="Enter Your Email" label="Email" 
        id='email'
        onChange={handleFormChange}
        value={formData.email}
        />
        <Input type="password" placeholder="Password" label="Password"
        id='password'
        onChange={handleFormChange}
        value={formData.password}
        />
        <Input type="number" placeholder="Phone" label="Phone"
        id='phone'
        onChange={handleFormChange}
        value={formData.phone}
         />
        <Input type="text" placeholder="Address" label="Address"
        id='address'
        onChange={handleFormChange}
        value={formData.address}
        />
        
        <FormFooter btnText='Register' label='Already registered ? ' text='Login Here' link='login'  />
      </form>
    </Layout>
  );
};

export default Register;

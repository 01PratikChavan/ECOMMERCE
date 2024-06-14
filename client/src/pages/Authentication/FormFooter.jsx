import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const FormFooter = ({btnText,label,text,link}) => {
  return (
    <>
    <div className="flex py-1">
    <Button  type='submit'  variant='contained' >
      {btnText}
    </Button>
  </div>
    <span className='text-gray-800 dark:text-gray-400'   >{label} <Link className='text-red-600 font-semibold hover:underline' to={`/${link}`} >{text}</Link></span>
  </>
  )
}

export default FormFooter

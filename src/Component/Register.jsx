import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
    <div>Register</div>
    
    <button>
        <Link to={"/login"}>Register</Link>
    </button>
    
    </>
  )
}

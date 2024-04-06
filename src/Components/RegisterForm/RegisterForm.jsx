import React from 'react';
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const RegisterForm = () =>
{
    return(
        <div className='mainDiv'>
        <div className='wrapper'>
            <form action="">
                <h1>Register User</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required />
                    <MdOutlineMarkEmailUnread className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
            
                <button type='submit'>Submit</button>
              
            </form>
        </div>
            
        </div>
    )
}
export default RegisterForm;
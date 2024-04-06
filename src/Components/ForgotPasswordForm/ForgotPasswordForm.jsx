import React from 'react';
import './ForgotPasswordForm.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const ForgotPasswordForm = () =>
{
    return(
        <div className='mainDiv'>
        <div className='wrapper'>
            <form action="">
                <h1>Forgot Password</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required />
                    <MdOutlineMarkEmailUnread className='icon' />
                </div>
            
                <button type='submit'>Submit</button>
              
            </form>
        </div>
            
        </div>
    )
}
export default ForgotPasswordForm;
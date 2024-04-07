import React from 'react';
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
// the background image used for LoginForm, RegisterForm, and ForgotPasswordForm is from
// https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/
// referenced this youtube video to make this Register page
//https://www.youtube.com/watch?v=kghwFYOJiNg
//used this to get icons
//https://react-icons.github.io/react-icons/search/#q=email

const RegisterForm = () =>
{
    return(
        <div className='mainDiv'>
        <div className='wrapper'>
            <form >
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
        <p id ="credit">image from  https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/ </p>
        </div>
    )
}
export default RegisterForm;
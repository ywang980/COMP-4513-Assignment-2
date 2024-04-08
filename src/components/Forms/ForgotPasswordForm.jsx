import React from 'react';
import './styles/ForgotPasswordForm.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from 'react-router-dom';

// the background image used for LoginForm, RegisterForm, and ForgotPasswordForm is from
// https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/
// referenced this youtube video to make this forgot password page
//https://www.youtube.com/watch?v=kghwFYOJiNg
//used this to get icons
//https://react-icons.github.io/react-icons/search/#q=email

//ForgotPasswordForm
// Component to provide forgot password form
const ForgotPasswordForm = () => {
    return (
        <div className='mainDiv'>
            <div className='wrapper'>
                <form >
                    <h1>Forgot Password</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Email' required />
                        <MdOutlineMarkEmailUnread className='icon' />
                    </div>
                    <Link to="/">
                        <button type='submit'>Submit</button>
                    </Link>

                </form>
            </div>
            <p id="credit">image from  https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/ </p>
        </div>
    )
};

export default ForgotPasswordForm;
import React from 'react';
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
// the background image used for LoginForm, RegisterForm, and ForgotPasswordForm is from
// https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/
// referenced this youtube video to make this login page
//https://www.youtube.com/watch?v=kghwFYOJiNg
//used this to get icons
//https://react-icons.github.io/react-icons/search/#q=email
// Login



const LoginForm = () =>
{
    return(
        <div className='mainDiv'>
        <div className='wrapper'>
            <form >
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remeber-forgot">
                    <label ><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
            <p id ="credit">image from  https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/ </p>
        </div>
    )
}
export default LoginForm;
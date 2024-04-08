import React from 'react';
import './styles/LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

// the background image used for LoginForm, RegisterForm, and ForgotPasswordForm is from
// https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/
// referenced this youtube video to make this login page
//https://www.youtube.com/watch?v=kghwFYOJiNg
//used this to get icons
//https://react-icons.github.io/react-icons/search/#q=email
// Login

const LoginForm = () => {
    return (
        <div className='mainDiv'>
            <h1 id="websiteTitle">RacingLineAnalytics</h1>
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
                        <Link to="/ForgotPasswordForm" >Forgot password?</Link>
                    </div>
                    <Link to="/Home">
                        <button type='submit'>Login</button>
                    </Link>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/RegisterForm">Register</Link></p>
                    </div>
                </form>
            </div>
            <p id="credit">image from  https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/ </p>
        </div>
    )
};

export default LoginForm;
import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Csbtn from "../button/btn";
import LoginR from "./loginR";
import './login.css'

const Login = (props) => {

    return (   
        <div className='container'>
        <div className="image">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="logo1">
                <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">

                </path>
                </g>
            </svg>
        </div>
        <div className="content">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="logo">
                <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">

                </path>
                </g>
            </svg>
            <h1 className='ha1'>Happening now</h1>
            <h3>Join Twitter today.</h3>
            <div className='botn'>
                <Csbtn>Sign up with Google</Csbtn>
                <Csbtn >Sign up with Apple</Csbtn>
                <span className='or'>Or</span>
                <Link className='cus' to='/' >Sign up with Phone or Email</Link>
            </div>
                <p className='fp'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                <p className='sp'>Already have an account?</p>
                <Link className='cus signin' to='/login' >Sign In</Link>
        </div>
        <div className="footer">
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/help'>help center</Link>
          <Link to='/service'>terms of service</Link>
          <Link to='/privacy'>privacy policy</Link>
          <Link to='/cookie'>cookie policy</Link>
          <Link to='/ads'>ads info</Link>
          <Link to='/blog'>blog</Link>
          <Link to='/status'>status</Link>
          <Link to='/careers'>careers</Link>
          <Link to='/resources'>brand resources</Link>
          <Link to='/advertising'>advertising</Link>
          <Link to='/merketing'>merketing</Link>
          <Link to='/business'>twitter for business</Link>
          <Link to='/developers'>developers</Link>
          <Link to='/directory'>directory</Link>
          <Link to='/settings'>settings</Link>
          <div>&copy; 2021 Twitter, Inc.</div>
        </nav>
        </div>
        </div>
        );
}
 
export default Login;
import React from "react";
import { Link } from "react-router-dom";
import './loginR.css'
import { twticon } from '../leftpane/svg'
import MyForm from "../forminput/formInput";

const LoginR = (props) => {
    return ( 
        <div className='bc'>
            <div className='all'>
                <div className='bal'>
                    <Link to='/' className="back">+</Link>
                    {twticon}
                </div>
                <h1>To get started, first enter your phone, email, or @username</h1>
                <div className='frm'>
                    <MyForm  />
                    <div className='lnk'>
                        <Link className='fb' to='/'>Forget Password</Link>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default LoginR;
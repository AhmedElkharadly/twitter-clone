import React from "react";
import { useState } from "react";
import './formInput.css'

const MyForm = (props) => {
    const [email, setEmail] = useState("");
    
    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${email}`)
    }
    return (
        <form className='group' onSubmit={handleSubmit}>
            <label className='lbl'>. Phone, Email or Username
                <input 
                className='form-input'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus />
            </label>
        </form>
    )
}

export default MyForm;
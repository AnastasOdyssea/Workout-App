import React, { useState } from "react";
import  "../Styles/App.css";

export const LogIn = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 
    return (
        <div className="auth-form-container">
       <form className="login-form" onSubmit={handleSubmit}>
       <label htmlFor="email">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="email">Passowrd:</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password" />
       <button type="submit">Log In</button>
       </form>
       <button className="button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign in</button>
       </div>
    )
}

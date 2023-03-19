import React, {useState} from "react";

export const Register = (props) =>{
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
     <form className="register-form" onSubmit={handleSubmit}>
     <label htmlFor="name">Full name</label>
        <input value={name} name="name" id="name" placeholder="full name" />
        <label htmlFor="email">Email:</label>
        <input value={name} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Passowrd:</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password" />
            
       <button type="submit">Sign In</button>
       </form>
       <button className="button" onClick={() => props.onFormSwitch('login')}>Don't have an account? Sign in</button>
        </div>
    )
}


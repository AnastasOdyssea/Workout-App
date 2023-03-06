import React, {useState} from "react";

export const Register = () =>{
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        
        <input value={name} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="email">Passowrd:</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password" />
       <button type="submit">Log In</button>
       </form>
       <button>Don't have an account? Sign in</button>
        </>
    )
}


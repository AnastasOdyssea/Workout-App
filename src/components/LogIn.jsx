import React, { useState } from "react";

export const LogIn = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
       <form>
        <label for="email">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label for="email">Passowrd:</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password" />
       <button>Log In</button>
       </form>
    )
}

import React, {useState} from 'react';
import {LogIn} from "./components/LogIn";
import {Register} from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  const[currentForm, setCurrentForm] = useState('login');
  return (
   <React.Fragment>
    <Navbar />
   {
    currentForm === "login" ? <LogIn /> : <Register />
   }
    

   </React.Fragment>
  );
}

export default App;

import React, {useState} from 'react';
import {LogIn} from "./components/LogIn";
import {Register} from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Signs from "./components/Signs";
import Distance from "./components/Distance";




function App() {
  const[currentForm, setCurrentForm] = useState('login');

 
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    
   <React.Fragment>
  <Navbar />
 <Home />


 <Signs />
 <Distance />
 

 
   
   {
    currentForm === "login" ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
   }
    
    </React.Fragment>
   
  );
}

export default App;

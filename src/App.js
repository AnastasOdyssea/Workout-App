import React, {useState} from 'react';
import {LogIn} from "./components/LogIn";
import {Register} from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Numbers} from "./components/Numbers";
import Converter from "./components/Converter";
import ZeroTimer from "./components/ZeroTimer";



function App() {
  const[currentForm, setCurrentForm] = useState('login');

 
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    
   <React.Fragment>
  <Navbar />
 <Home />
 <Numbers />
 <Converter />
 <ZeroTimer />
 
   
   {
    currentForm === "login" ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
   }
    
    </React.Fragment>
  );
}

export default App;

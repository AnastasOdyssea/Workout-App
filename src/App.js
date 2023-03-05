import React from 'react';
import {LogIn} from "./components/LogIn";
import {Register} from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
   <React.Fragment>
    <Navbar />
    <LogIn />
    <Register />
    

   </React.Fragment>
  );
}

export default App;

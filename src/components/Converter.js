import React, {useState} from 'react';


export const Converter = (props) => {

    const [seconds,setSeconds] =useState(0);
    function secondsToMinutes(seconds) {
        return Math.floor(seconds / 60);
      
     
   }
  

    
   const minutes = secondsToMinutes(seconds);

   function incrementSeconds(){
     
    setSeconds(seconds + 1);
    Converter();
   }


   
  
   return(
    <div>
      

         <button>Minutes: {minutes}</button> 
        <button onClick={incrementSeconds} >Seconds: {seconds}</button>
     
    </div>
   )
}

export default Converter;
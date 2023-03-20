import React, {useState} from "react";



 export const Distance = (props) => {
    const [distance,setDistance] = useState(0);
   
    function incrementDistance(){
        setDistance(distance + 0.1);
    }
   
    return (

        <div >
            <h1>Distance</h1>
    <button onClick={incrementDistance}> {distance} km</button>
   
  
        
       </div>
    )
}



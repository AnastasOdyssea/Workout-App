import React, {useState} from "react";


 export const Numbers = (props) => {
    const [distance,setDistance] = useState(0);
   
    function incrementDistance(){
        setDistance(distance + 0.1);
    }
   
    return (

        <div >
            <p>Distance</p>
    <button onClick={incrementDistance}> {distance} km</button>
   
  
        
       </div>
    )
}


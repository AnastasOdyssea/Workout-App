

import React, { useState, useEffect } from "react";
import  "../Styles/Distance.css";

function Distance() {
  const [distance, setDistance] = useState(0); // starting distance in kilometers
  const [time, setTime] = useState(0); // starting time in seconds
  const [isRunning, setIsRunning] = useState(false); // is the timer running?
  
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
     
        setDistance(distance => distance + 0.01);
        
       
        setTime(time => time + 1);
      }, 1000);
    }
    
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const dispSecondsAsMins = (seconds) => {
    
    
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return mins.toString() + ":" + (seconds_ === 0 ? "00" : seconds_.toString());
  };

  return (
    <div>
      <div className="numbers">
      <p className="distance">Distance: {distance} km</p>
      <p className="time">Time:{dispSecondsAsMins (time) } </p>
      </div>
      <div className="buttons">
      <button className="button1" onClick={handleStart}>Start</button>
      <button className="button1" onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}
 export default Distance;

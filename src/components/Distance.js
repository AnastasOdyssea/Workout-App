

import React, { useState, useEffect } from "react";

function Distance() {
  const [distance, setDistance] = useState(0); // starting distance in meters
  const [time, setTime] = useState(0); // starting time in seconds
  const [isRunning, setIsRunning] = useState(false); // is the timer running?
  
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        // decrease distance by 1 meter every second
        setDistance(distance => distance + 1);
        
        // decrease time by 1 second
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
      <p>Distance: {distance} meters</p>
    
      <p>Time:{dispSecondsAsMins(time)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
 export default Distance;

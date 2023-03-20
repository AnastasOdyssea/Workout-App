import { useEffect, useRef, useState } from "react";





const Timer = () => {
  const [timer, setTimer] = useState(0); 
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      
      firstStart.current = !firstStart.current;
      return;
    }

    console.log("subsequent renders");
    console.log(start);
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
   
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  const dispSecondsAsMins = (seconds) => {
    
    
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return mins.toString() + ":" + (seconds_ === 0 ? "00" : seconds_.toString());
  };

  return (
    <div className="Timer">
        <h1>Time</h1>
      <p>{dispSecondsAsMins(timer)}</p>
      <div className="startDiv">
      
        <button className="startBut" onClick={toggleStart}>
          {!start ? "START" : "STOP"}
        </button>
      
      </div>
    </div>
  );
};





export default Timer;
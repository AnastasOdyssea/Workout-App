import React, { useState, useEffect } from 'react';
import  "../Styles/Distance.css";

function Distance() {
  const [startPosition, setStartPosition] = useState(null);
 
  const [currentPosition, setCurrentPosition] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition(position.coords);
    });
  }, []);

  function startActivity() {
    navigator.geolocation.getCurrentPosition((position) => {
      setStartPosition(position.coords);
    });
   
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition(position.coords);
    });
  }, []);

  

  function calculateDistance(position1, position2) {
    const lat1 = position1.latitude;
    const lon1 = position1.longitude;
    const lat2 = position2.latitude;
    const lon2 = position2.longitude;

    const R = 6371e3; // earth's radius in meters 
    const phi1 = lat1 * Math.PI/180; // convert to radians
    const phi2 = lat2 * Math.PI/180;
    const deltaPhi = (lat2-lat1) * Math.PI/180;
    const deltaLambda = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // distance in meters

    setDistance(d);
  }

  useEffect(() => {
    if (startPosition && currentPosition) {
      calculateDistance(startPosition, currentPosition);
    }
  }, [startPosition, currentPosition]);

  return (
   
    <div className='numbers'>
      <button className='buttons' onClick={startActivity}>Start<br></br> Activity</button>
    
      {distance  && <p>Distance:  {distance} meters</p> }
    </div>
  );
}

export default Distance;
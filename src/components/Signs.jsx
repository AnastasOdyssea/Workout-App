import { FaSwimmer } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
import { FaBicycle } from 'react-icons/fa';
import "../Styles/Signs.css";

function Signs() {
  return (

    <div className='container'>
      <div className='text'>
        <p>Track your workout </p>
      </div>
      <div className='signs'>
      <FaRunning />
      <FaSwimmer />
      <FaBicycle />
      </div>
    </div>
  );
}

export default Signs;
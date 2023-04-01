import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {BrowserRouter,Link} from "react-router-dom";
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
}    

return(
   
        <header>
            <h3>RA</h3>
        <BrowserRouter>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/LogIn">Log In</Link>
               <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
         </BrowserRouter> 
            
              <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
              </button>
        </header>
      
       
      
    );
}

export default Navbar;
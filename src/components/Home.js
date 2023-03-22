import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import  "../Styles/Home.css";





  
   
    
    const Home = () => {
        const images = [
            "https://media.istockphoto.com/id/1423623590/photo/three-runners-sprinting-outdoors-sportive-people-training-in-a-urban-area-healthy-lifestyle.jpg?s=612x612&w=0&k=20&c=GvranXFFiJdGOdfpYU2CBcMSY48rQ62HkWoJw9L6oNY=",
            "https://media.istockphoto.com/id/183625329/photo/swimming-underwater.jpg?s=612x612&w=0&k=20&c=sQp_UUDLRxw6Bbceu0wyPKY75sV4bLRWNsrD1SDvLt8=",
            "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ];
    
        return (
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                       
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                       
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        
                    </div>
                </div>
            </Slide>
        );
    };
    
    export default Home;
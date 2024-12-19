import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroSectionStyle = {
    width: '100%',
    height: '40vh', // 40% of the viewport height
    backgroundImage: `url('https://wallpapercave.com/wp/wp3173690.jpg')`,
    backgroundSize: 'cover', // Ensure image covers the full section
    backgroundPosition: 'center center', // Center the image
    backgroundAttachment: 'fixed', // Optional: for parallax effect
    display: 'flex',

    flexDirection: 'column',
    
    justifyContent: 'center',
    
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    
  };

  return (
    <div style={heroSectionStyle }>
       <img 
              src="https://i.ibb.co/6XQG9Ym/LOGO-removebg-preview.png" 
              alt="Your Logo" 
              className="rounded-lg" 
              style={{ width: '110px', height: '110px', borderRadius: '10px'}}
            />
      <h1>Compete, Connect, Conquer. </h1>
      <h1> The Game Starts Here.</h1>
      
      <br></br>
      <div>
      <Link
      to="/Events"
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Find Events
    </Link>
    <Link
      to="/AddEvent"
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Create Your Event
    </Link>      </div>
      
    </div>
  );
};

export default HeroSection;

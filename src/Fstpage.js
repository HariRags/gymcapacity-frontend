// import React, { useState } from 'react';
import './Fstpage.css';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';


function Fstpage() {
  
  // const [showDetails, setShowDetails] = useState(false);

  // function handleButtonClick(page) {
  //   if (page === 'enter') {
  //          setShowDetails(true);
           
  //   }
  // }
  
  return (
   
    
        
    <div className="app-container">      
    {/* {showDetails ? (
      <Details />
        ) : ( */}
          <>
    
   
           
        <div className="left-container">
        <button1>Gym View</button1>
        <div>
          {/* <button2 onClick={() => handleButtonClick('enter')}>Enter</button2> */}
          <button2><Link to="/enter">Enter</Link></button2>
          <p1 > Enter the gym by entering your details</p1>
          {/* <button3 onClick={() => handleButtonClick('home')}>View</button3> */}
          <button3><Link to="/home">View</Link> </button3>
          <p1>View how many people are working out</p1>
        </div>
        </div>
        )

        
        <div className="right-container">
      
        <div className="overlay-text">
        <p className="overlay-text">Suffer the pain<br></br>of discipline.<br></br>Or suffer the<br></br>pain of regret...</p>
        <div className='skyshadow'>
        </div>
        </div>
        </div>
        </>
        
    

 
      
         
    </div>
    
    
    
      
  );
}


export default Fstpage;

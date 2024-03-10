// src/Fstpage.js
import React, { useState } from 'react';
import './Fstpage.css';
import Details from './Details'; 

function Fstpage() {
 
  function handleButtonClick (){
   
  }
 // const handleButtonClick = (page) => {
  //  setCurrentPage(page);
 // };

  return (
    <div className="app-container">
      <div className="left-container">
        <button1>Gym View</button1>
        <div>
          <button2 onClick={() => handleButtonClick('enter')}>Enter</button2>
          <p1 > Enter the gym by entering your details</p1>
          <button3 onClick={() => handleButtonClick('view')}>View</button3>
          <p1>View how many people are working out</p1>
        </div>
      </div>

      
      <div className="right-container">
      
        <div className="overlay-text">
        <p className="overlay-text">Suffer the pain<br></br>of discipline.<br></br>Or suffer the<br></br>pain of regret...</p>
        <div className='skyshadow'>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Fstpage;

// src/App.js
import React, { useState } from 'react';
import './App.css';
import EnterPage from './components/EnterPage';
import ViewPage from './components/ViewPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <h1><button1>GYM VIEW</button1></h1>
        <div>
          <h1><button onClick={() => handleButtonClick('enter')}><h1>Enter</h1></button></h1>
          <h1><button onClick={() => handleButtonClick('view')}><h1>View</h1></button></h1>
        </div>
        {currentPage === 'enter' && <EnterPage />}
        {currentPage === 'view' && <ViewPage />}
      </div>
      <div className="right-container">
        
        <div className="overlay-text">
        <p className="overlay-text"><h1>Suffer the pain<br></br>of discipline.<br></br>Or suffer the<br></br>pain of regret...</h1></p>
      </div>
      </div>
    </div>
  );
}

export default App;

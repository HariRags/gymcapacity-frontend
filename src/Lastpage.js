// src/lastpagePage.js
import React, { useState,useEffect } from 'react';
import './Lastpage.css'
import Popup from './Popup'; // Import the Popup component
import { useHistory } from 'react-router-dom';

  
  function Lastpage() {
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
            history.push('/home'); // Go back to the list page after 5 seconds
          }, 5000);
    
        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [history]);
    
    const [deletedStudent, setDeletedStudent] = useState({name:'', id:''});
    useEffect(() => {
      async function fetchStudents() {
        try {
          const response = await fetch('http://127.0.0.1:8000/gym/last-deleted-user/');
          if (!response.ok)
            throw new Error('Failed to fetch students');
          const data = await response.json();
          setDeletedStudent(data);
        } catch (error) {
          console.error('Error fetching students', error);
        }
      }
      fetchStudents();
    }, []);
  return (
    <div className="lastpagecontainer">
    <div className="lastpg">
      
      <p>You have exited the gym.<br></br>
      Rest well <p5>{deletedStudent.username} </p5>and<br></br> come back soon!</p>
      
      
    </div> 
    <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}  />
    </div>

    
      
    
  );
};

export default Lastpage;


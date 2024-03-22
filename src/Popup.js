import "./Popup.css";
import { useRef, useState, useEffect } from 'react';
import { UserRound } from 'lucide-react';
import { useHistory } from "react-router";
import Lastpage from "./Lastpage";

const Popup = ({ isOpen, onClose, student }) => {
  const history = useHistory();
  const PopupRef = useRef();
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isPending,setIsPending]=useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [showLastPage, setShowLastPage] = useState(false); // Track if Lastpage should be shown

  useEffect(() => {
    let timer;
    if (showLastPage) {
      timer = setTimeout(() => {
        onClose(); // Close the popup after 2 seconds
        setShowLastPage(false); // Reset showLastPage state after timeout
        history.push("/home"); // Redirect to list page after 2 seconds
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [showLastPage, onClose, history]);

  useEffect(() => {
    let resetTimer;
    if (isCorrectPassword && showLastPage) {
      resetTimer = setTimeout(() => {
        setIsCorrectPassword(false);
        setShowLastPage(false);
      }, 2000); // Reset after 2 seconds
    }

    return () => clearTimeout(resetTimer);
  }, [isCorrectPassword, showLastPage]);

  const closePopup = (e) => {
    if (PopupRef.current && !PopupRef.current.contains(e.target)) {
      setIsInvalidPassword(false);
      onClose();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);

    const rollNumber = PopupRef.current.querySelector('#confirm-exit').value;
    try {
      const response = await fetch(`http://127.0.0.1:8000/gym/delete/${student.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: rollNumber,
        })
      });
      if (response.ok) {
        console.log('Student deleted Successfully!!');
        setIsPending(false);
        setIsCorrectPassword(true);
        setShowLastPage(true); // Set to true when password is correct to show Lastpage
        
      } else {
        setIsInvalidPassword(true);
        setIsPending(false);
        console.error('Failed to delete Student', response.statusText);
      }
    } catch (error) {
      console.error('Error Deleting Student: ', error);
    }
  }

  return isOpen ? (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-heading">
        <p>Please confirm your Roll No.</p>
      </div>
      <div className="popup-form" ref={PopupRef}>
        <form onSubmit={handleSubmit}>
        {isInvalidPassword && <p className="wrong-rollno">Incorrect Roll No. Please try again.</p>}
          <div className="roll-exit">
            <UserRound className="User" />
            <input type="text" placeholder="Roll No." id="confirm-exit" name="exit-roll" required />
          </div>
          <div >
            {!isPending && <button className="exit-button" type="submit">Exit</button>}
            {isPending && <button className="exit-button" type="submit">Verifying...</button>}
          </div>
        </form>
      </div>
      {isCorrectPassword && showLastPage && <Lastpage student={student} />} {/* Render Lastpage if password is correct and showLastPage is true */}
    </div>
  ) : null;
};

export default Popup;

import "./Popup.css";
import { useRef, useState } from 'react';
import { UserRound } from 'lucide-react';
import { useHistory } from "react-router";

const Popup = ({ isOpen, onClose, student }) => {
  const history = useHistory();
  const PopupRef = useRef();
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isPending,setIsPending]=useState(false);


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
        history.push("/exit-popup")
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
    </div>
  ) : null;
};

export default Popup;

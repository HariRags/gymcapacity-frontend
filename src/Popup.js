

import "./Popup.css";
import {useRef} from 'react';
import { UserRound } from 'lucide-react';

const Popup = ({ isOpen, onClose,student }) => {
    
    const PopupRef=useRef();
    const closePopup=(e)=>{
        if (PopupRef.current && !PopupRef.current.contains(e.target)){
            onClose();
        }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
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

      } else {
        console.error('Failed to delete Student', response.statusText);
      }
    } catch (error) {
      console.error('Error Deleting Student: ', error);
    }
  }

  return isOpen ? (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-heading" >
        <p>Please confirm your Roll No.</p>
      </div>
      <div className="popup-form" ref={PopupRef}>
        <form onSubmit={handleSubmit}>
            <div className="roll-exit">
                <UserRound className="User"/> 
                <input type="text" placeholder="Roll No." id="confirm-exit" name="exit-roll" required/>
                
            </div>
            <button className="exit-button" type="submit">Exit</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Popup;

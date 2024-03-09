

import "./Popup.css";
import {useRef} from 'react';
import { UserRound } from 'lucide-react';

const Popup = ({ isOpen, onClose }) => {
    
    const PopupRef=useRef();
    const closePopup=(e)=>{
        if (PopupRef.current && !PopupRef.current.contains(e.target)){
            onClose();
        }
    }

  return isOpen ? (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-heading" >
        <p>Please confirm your Roll No.</p>
      </div>
      <div className="popup-form" ref={PopupRef}>
        <form>
            <div className="roll-exit">
                <UserRound className="User"/> 
                <input type="text" placeholder="Roll No." id="confirm-exit" name="exit-roll" required/>
                
            </div>
            <button className="exit-button">Exit</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Popup;

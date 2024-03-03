// const Popup = () => {
//     return ( 
//         <div className="fixed inset-0 bg-black bg opacity-30 background-blur-sm">
//             Modal
//         </div>
//      );
// }
 
// export default Popup;

import "./Popup.css";
import {useRef} from 'react';
import { User } from 'lucide-react';

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
                <div className="icon"><User style={{height:"90%", width:"50%", paddingLeft:"80%"}} /></div>
                <input type="text" placeholder="      Roll No." id="confirm-exit" name="exit-roll" required/>
            </div>
            <button>Exit</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Popup;

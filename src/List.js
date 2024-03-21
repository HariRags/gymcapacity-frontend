import "./List.css";
import { useEffect, useState } from "react";
import Form from "./Form";
import Popup from "./Popup";
import {UserMinus} from 'lucide-react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

function Page2() {
  // Changing colour of arrow buttons
  

  const [FirstPageOpacity,SetFirstPageOpacity] = useState('0.29');
  const [LastPageOpacity, SetLastPageOpacity] = useState('0.29');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [students, setStudents] = useState([]);

  function fixArrows(currentIndex) {
    if (currentIndex < 5) {
      SetFirstPageOpacity('0.29');
      if (students.length <= 5)
        SetLastPageOpacity('0.29');
      else
        SetLastPageOpacity('1.0');
    }
    else {
      SetFirstPageOpacity('1.0');
      if (students.length <= currentIndex + 5)
        SetLastPageOpacity('0.29');
      else
        SetLastPageOpacity('1.0');

    }
  }

  useEffect(() => {
    fixArrows();
    SetFirstPageOpacity('0.29')
    //eslint-disable-next-line
  },[])

  
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch('http://127.0.0.1:8000/gym/list/');
        if (!response.ok)
          throw new Error('Failed to fetch students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    }
    !isPopupOpen && fetchStudents();
  }, [isPopupOpen]);



  
  const [isExitMode, setExitMode] = useState(false);

  //deleting student 
  const [DeleteStudent,setDeleteStudent] = useState({name:'',id:''});
  
  function actualLength() {
    return students.filter((student)=>student.name!== '').length
  }
  function showPrevNames() {
    const PrevIndex = currentIndex - 5;
    if (PrevIndex >= 0) {
      setCurrentIndex(PrevIndex);
    }
    else
      setCurrentIndex(0);
  }

  
  function showNextNames() {
    const nextIndex = currentIndex + 5;
    if (nextIndex < students.length) {
      setCurrentIndex(nextIndex);
    }
  }
  // since i didn't have acess to id yet i made a random id generator
  return (
    <div className="container">
      <section className="main-content">
        <header className="header">
          <strong>{`${actualLength()}/20`} </strong>people are on the grind!
        </header>
        <article className="list">
          {students.filter(student=>student.username!== '').slice(currentIndex,currentIndex+5).map((student) => { // If the student doesn't exist, use an empty object
            return (
              
              <div key={student.id} id="item">
                <button
                  onClick={() => { setIsPopupOpen(true); setDeleteStudent(student); fixArrows()}}
                  id={isExitMode ? 'removeButton':'inexit-remove-button'}
                >
                  <UserMinus />
                </button>
                <div id={isExitMode ?  'name':'inexit-name'}>
                  <div className="text">{student.username}</div>
                </div>
              </div>
            );
          })}
        </article>
        <article className="arrows">
          <button className="left-arrow" onClick={() => { showPrevNames();fixArrows(currentIndex-5) }}><svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" id="left-arrow">
            <path d="M25 32.299L25 1.69811C24.999 1.38829 24.9151 1.08461 24.7573 0.819737C24.5994 0.554867 24.3736 0.338852 24.1041 0.194935C23.8347 0.051018 23.5318 -0.0153462 23.228 0.00298718C22.9243 0.0213206 22.6312 0.12365 22.3803 0.29897L0.674954 15.5994C-0.224984 16.2335 -0.224984 17.7602 0.674954 18.396L22.3803 33.6964C22.6307 33.8735 22.9239 33.9774 23.2282 33.9967C23.5324 34.016 23.8361 33.9501 24.1061 33.806C24.3761 33.662 24.6022 33.4454 24.7598 33.1797C24.9174 32.914 25.0005 32.6094 25 32.299Z" fill="#43C2DD" fill-opacity={FirstPageOpacity} />
          </svg></button>
          <button className="right-arrow" onClick={() => { showNextNames(); fixArrows(currentIndex+5); }}><svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" id="right-arrow">
            <path d="M1.83299e-06 1.70102L4.95388e-07 32.3019C0.000956064 32.6117 0.0848756 32.9154 0.24273 33.1803C0.400586 33.4451 0.626393 33.6611 0.895852 33.8051C1.16531 33.949 1.46822 34.0153 1.77197 33.997C2.07571 33.9787 2.3688 33.8763 2.61967 33.701L24.325 18.4006C25.225 17.7665 25.225 16.2398 24.325 15.604L2.61967 0.303583C2.36932 0.12648 2.07609 0.022623 1.77184 0.00329525C1.46758 -0.0160325 1.16395 0.0499083 0.893917 0.193954C0.623888 0.337999 0.397789 0.554639 0.24019 0.820337C0.0825939 1.08603 -0.000476898 1.39063 1.83299e-06 1.70102Z" fill="#43C2DD" fill-opacity={LastPageOpacity} />
          </svg></button>
        </article>
        <button id={isExitMode ? 'inexit-exit-button' : "exitButton"} onClick={() => { setExitMode(!isExitMode); fixArrows(currentIndex) }}>
            {isExitMode? 'Back':'Exit'}
        </button>
        <Link to="/enter">
        <button id={isExitMode?"inexit-enter-button":"addButton"} onClick={()=>{fixArrows(currentIndex)}}>
            Enter
        </button>
        </Link>
        
      </section>
      <aside className="feedback">{<Form/>}</aside>
      <Popup isOpen={isPopupOpen} onClose={()=>setIsPopupOpen(false) } student={DeleteStudent}/>
      {/* <div className="footer">----------------------------------------</div> */}
      
    </div>
    
  );
}


export default Page2;

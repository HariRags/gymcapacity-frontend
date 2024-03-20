import React, { useState } from "react";
import { UserRound, Home } from "lucide-react";
import { useHistory,Link } from "react-router-dom";
import "./Details.css";


function Details() {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPending(true);
        
        fetch('http://127.0.0.1:8000/gym/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: name,
                password: rollNo
            }),
        })
        .then(response => {
            if (response.ok) {
                setIsPending(false);
                history.push('home');
            } else {
                // Handle error
                console.error('Failed to register:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="details-background">
            <div className="details-main">
            <header className="header-div-details"> 
            <Link to='/home'>
                <div className="home-icon-container">
                    <div className="home-icon"> <Home/></div>
                </div>
            </Link>
                <div className="details-header"> Please enter your details</div>
            </header>
                <form className="details-form" onSubmit={handleSubmit}>
                    
                    <div className="name">
                        <UserRound className="user"/>
                        <input
                            type="text"
                            required
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        
                    </div>

                    <div className="roll-no">
                        <UserRound className="user"/>
                        <input
                            type="text"
                            required
                            placeholder="Roll No."
                            value={rollNo}
                            onChange={(event) => setRollNo(event.target.value)}
                        />
                    </div>

                    <div className="proceed">
                    { !isPending && <button type="submit" id="submit-button">Proceed</button>}
                    { isPending && <button type="submit" id="submit-button">Adding...</button>}
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Details;

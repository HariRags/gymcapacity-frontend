import React, { useState } from "react";
import { UserRound } from "lucide-react";
import { useHistory } from "react-router-dom";
import "./Details.css";

function Details() {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        
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
                <header className="details-header"> Please enter your details</header>
                <form className="details-form" onSubmit={handleSubmit}>
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
                    <button type="submit" id="submit-button">Proceed</button>
                </form>
            </div>
        </div>
    );
}

export default Details;

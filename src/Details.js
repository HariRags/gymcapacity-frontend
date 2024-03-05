import React from "react";
import { UserRound } from "lucide-react";
import "./Details.css"

function Details() {
    return (
        <div className="main">
            <header className="header"> Please enter your details</header>
            <form>
                <div className="roll-no">
                    <UserRound className="user"/>
                    <input type="text" required placeholder="Roll No."></input>
                </div>
                <div className="name">
                    <UserRound className="user"/>
                    <input type="text" required placeholder="Enter your Name"></input>
                </div>
                <button type="submit" id="submit-button">Proceed</button>
            </form>
            <div className="background"></div>
        </div>
    )
}

export default Details;

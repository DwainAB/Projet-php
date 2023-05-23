import React from "react";
import btnMessages from "../../Assets/btn-messages.png"
import btnNotification from "../../Assets/btn-notification.png"
import userImg from "../../Assets/user-img.png"
import homeBtn from "../../Assets/home.png"
import explorerBtn from "../../Assets/explorer.svg"
import friendsBtn from "../../Assets/friends.png"
import gamesBtn from "../../Assets/games.png"
import arrowDown from "../../Assets/arrowdown.png"
import {Link} from "react-router-dom"
import "./Navbar.css"


function Navbar(){
    return(
        <div className="container-nav">
            <input type="text" placeholder="Search..." />
            <ul className="links-nav">
                <Link className="link" to="/"><li className="link-nav"><img className="active-link" src={homeBtn} alt="home btn"/>Home</li></Link>
                <li className="link-nav"><img src={explorerBtn} alt="explorer btn"/>Explorer</li>
                <li className="link-nav"><img src={friendsBtn} alt="friends btn"/>Friends</li>
                <li className="link-nav"><img src={gamesBtn} alt="games btn"/>Games</li>
            </ul>
            <div className="section-nav-right">
                <ul className="actions-nav">
                    <li className="action-nav"><img src={btnMessages} alt="messages button"/></li>
                    <li className="action-nav"><img src={btnNotification} alt="notifications button"/></li>
                </ul>
                <div className="user-nav">
                    <img src={userImg} alt="user img" />
                    <p className="name-user-nav">Booba</p>
                    <img className="arrow-down-nav" src={arrowDown} alt="arrow down" />
                </div>

                <div className="menu-nav">
                    <p className="text-menu-nav">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
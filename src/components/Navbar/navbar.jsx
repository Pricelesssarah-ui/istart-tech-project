import React from "react";
import "./navbar.css";
import Search from "../../assets/search.png";
import Notify  from "../../assets/notification.png";
import Moon from "../../assets/moon.png";
import Profile from "../../assets/profile.png";



function Navbar() {
    return(
        <div className="navigation">
                <div className="navbar">
                    <div className="left-side">
                        <p>Good evening, Jack</p>
                    </div>

                    <div className="middle-side">
                        <div className="input">
                            <img src={Search} alt="search" />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>

                    <div className="profile-side">
                        <div className="profileIcon">
                            <img src={Notify} alt="notify" />
                        </div>

                        <div className="profileIcon-moon">
                            <img src={Moon} alt="moon" />
                        </div>

                        <div className="profileIcon-profile">
                            <img src={Profile} alt="profile" />
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Navbar;
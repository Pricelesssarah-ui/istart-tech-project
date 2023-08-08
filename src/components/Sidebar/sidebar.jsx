import React from "react";
import "./sidebar.css";
import Button from "../Button/button";
import Overview from "../../assets/overview.png";
import Today from "../../assets/today.png";
import Schedule from "../../assets/schedule.png";
import Note from "../../assets/note.png";
import Project from "../../assets/project.png";
import Team from "../../assets/team.png";



function Sidebar() {
    return(
        <div className="container-sidebar">
            <div className="sidebar">
                <div className="top-sidebar">
                    <p>Brand Logo</p>
                </div>

                <div className="button-container">
                    <Button text="+ Add new task" />
                </div>

                <div className="sidebar-container">
                    <h4>MENU</h4>
                    
                   <div className="menu-container">
                       <div className="menu active-bar">
                           <img src={Overview} alt="" />
                           <p className="active">Overview</p>
                       </div>
                       
                       <div className="menu">
                           <img src={Today} alt="" />
                           <p className="special">Today</p>
                       </div>

                       <div className="menu">
                           <img src={Schedule} alt="schedule" />
                           <p className="special">Schedule</p>
                       </div>


                       <div className="menu">
                           <img src={Note} alt="note" />
                           <p className="special">Note</p>
                       </div>

                       <hr />

                       <div className="menu">
                           <img src={Project} alt="project" />
                           <p className="special">Projects</p>
                       </div>


                       <div className="menu">
                           <img src={Team} alt="team" />
                           <p className="special">Team</p>
                       </div>


                   </div>
                    
                </div>





            </div>
        </div>
    )
}

export default Sidebar;
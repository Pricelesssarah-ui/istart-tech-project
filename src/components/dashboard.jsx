import React from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar/sidebar";
import Navbar from "./Navbar/navbar";
import Board from "../assets/board.png";
import List from "../assets/list.png";
import Bullet1 from "../assets/bullet-1.png";
import Bullet2 from "../assets/bullet-2.png";
import Bullet3 from "../assets/bullet-3.png";
import Schedule from "../assets/schedule.png";
import Flag from "../assets/flag-1.png";




function Dashboard() {
    return(
        <div className="container-dashboard">
            {/*section of the dashboard*/}
            <div className="dashboard">
                <div >
                    <Sidebar />
                </div>

                <div>
                    <Navbar />

                    <div className="dashboard-body">
                         {/*overview of the dashboard*/}
                        <div className="dashboard-text">
                            <p>Overview</p>
                        </div>
                        {/*Date, List and the Board*/}
                        <div className="schedule-date">
                            <div>
                                <p>August 1, 2023</p>

                                <div className="list-option">
                                    <div className="List">
                                        <img src={List} alt="list" />
                                        <button className="list">List</button>
                                    </div>

                                    <div className="Board">
                                        <img src={Board} alt="board" />
                                        <button className="board">Board</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Title --- Todo*/}
                    <div className="to-do">
                        <p>To-do</p>
                    </div>

                    {/*the task-1*/}
                    <div className="task-1">
                        <div className="task-name">
                            <img src={Bullet1} alt="" />
                            <p>Task name</p>
                        </div>

                        <div className="task-text">
                            <p>Description</p>
                        </div>

                        <div className="schedule">
                            <div className="date">
                                <img src={Schedule} alt="" />
                                <p>Aug 8</p>
                            </div>

                            <div className="urgent">
                                <img src={Flag} alt="" />
                                <p>Urgent</p>
                            </div>
                        </div>
                    </div>
                    
                    {/*the task-2*/}
                    <div className="task-2">
                        <div className="task-name">
                            <img src={Bullet2} alt="" />
                            <p>Task name</p>
                        </div>

                        <div className="task-text">
                            <p>Description</p>
                        </div>

                        <div className="schedule">
                            <div className="date">
                                <img src={Schedule} alt="" />
                                <p>Aug 8</p>
                            </div>

                            <div className="urgent">
                                <img src={Flag} alt="" />
                                <p>Urgent</p>
                            </div>
                        </div>
                    </div>
                    
                    {/*the task-3*/}
                    <div className="task-3">
                        <div className="task-name">
                            <img src={Bullet3} alt="" />
                            <p>Task name</p>
                        </div>

                        <div className="task-text">
                            <p>Description</p>
                        </div>

                        <div className="schedule">
                            <div className="date">
                                <img src={Schedule} alt="" />
                                <p>Aug 8</p>
                            </div>

                            <div className="urgent">
                                <img src={Flag} alt="" />
                                <p>Urgent</p>
                            </div>
                        </div>
                    </div>

                    {/*Add task Button*/}
                    <div className="addTask">
                        <button>+ Add new task</button>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default Dashboard
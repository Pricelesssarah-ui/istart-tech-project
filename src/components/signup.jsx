import React from "react";
import "./signup.css";
import Loginpage from "../assets/Group.png";
import Google from "../assets/Logo.png";
import Button from "./Button/button";


function Signup() {
    return(
        <div className="container-signup">
            <div className="container-item-1">
                <h1>Organize your workflow, boost your productivity</h1>
                <img src={Loginpage} alt="loginpage" />
            </div>

            <div className="container-item-2">
                <h1>Brand Logo</h1>

                <div className="sign-option">
                    <div>
                        <button className="sign-in">Sign in</button>
                    </div>

                    <div className="signUp">
                        <button className="sign-up">Sign up</button>
                    </div>
                </div>

                <div className="sign-form">
                    <img src={Google} alt="" />
                    <button>Sign in with Google</button>
                </div>

                <div className="form-signin">
                    <form action="">
                        <div>
                            <p>Full Name</p>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                            />
                        </div>
                        
                        <div className="email-input">
                            <p>Email</p>
                            <input 
                                type="text" 
                                placeholder="John@example.com" 
                            />
                        </div>

                        <div>
                            <p>Password</p>
                            <input 
                                type="password" 
                                placeholder="Create password" 
                            />
                        </div>

                        <div className="check">
                            <p>Must be at least 8 characters</p>
                        </div> 
                    </form>
                </div>

                <Button text="Create account" />
            </div>
        </div>
    )
}

export default Signup;
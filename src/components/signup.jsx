import React from "react";
import "./signup.css";
import Loginpage from "../assets/Group.png";
import Google from "../assets/Logo.png";
import Button from "./Button/button";
import Password from "../assets/password.png";


function Signup() {
    return(
        <div className="container-signup">
            <div className="container-item1">
                <h1>Organize your workflow, boost your productivity</h1>
                <img src={Loginpage} alt="loginpage" />
            </div>

            <div className="container-item2">
                <h1>Brand Logo</h1>

                <div className="sign-option">
                    <div>
                        <button className="sign-in"> <a href="/login">Sign in</a> </button>
                    </div>

                    <div className="signUp">
                        <button className="sign-up"> <a href="/signup">Sign up</a></button>
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
                                required
                            />
                        </div>
                        
                        <div className="email-input">
                            <p>Email</p>
                            <input 
                                type="text" 
                                placeholder="John@example.com" 
                                required
                            />
                        </div>

                        <div>
                            <p>Password</p>
                            <div className="password-input">
                                <input 
                                    type="password" 
                                    placeholder="insert your password"
                                    className="password"
                                    required
                                />
                                <img src={Password} alt="password" />
                            </div>
                        </div>

                        <div className="check">
                            <p>Must be at least 8 characters</p>
                        </div> 
                    </form>
                </div>

                <a href="/"><Button text="Create account" /></a> 
            </div>
        </div>
    )
}

export default Signup;
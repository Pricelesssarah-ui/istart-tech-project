import React from "react";
import "./signup.css";
import Loginpage from "../assets/Group.png";
import Google from "../assets/Logo.png";
import Button from "./Button/button";
import Password from "../assets/password.png";


function Signup() {
    return(
        <div className="container-signup">
            {/*section 1 */}
            <div className="container-item1">
                <h1>Organize your workflow, boost your productivity</h1>
                <img src={Loginpage} alt="loginpage" />
            </div>
            {/*section 2 */}
            <div className="container-item2">
                {/*The signin and signup options */}
                <h1>Brand Logo</h1>

                <div className="sign-option">
                    <div>
                        <button className="sign-in"> <a href="/login">Sign in</a> </button>
                    </div>

                    <div className="signUp">
                        <button className="sign-up"> <a href="/signup">Sign up</a></button>
                    </div>
                </div>
                {/*Google logo signin*/}
                <div className="sign-form">
                    <img src={Google} alt="" />
                    <button>Sign in with Google</button>
                </div>
                {/*Form*/}
                <div className="form-signin">
                    <div className="form">
                        {/*Fullname Form*/}
                        <div className="email-input">
                            <p>Full Name</p>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="input input-type"
                                required
                            />
                        </div>
                        {/*Email Form*/}
                        <div className="email-input">
                            <p>Email</p>
                            <input 
                                type="text" 
                                placeholder="John@example.com" 
                                className="input input-type"
                                required
                            />
                        </div>
                        {/*Password Form*/}
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
                        {/*Below the input field*/}
                        <div className="check">
                            <p>Must be at least 8 characters</p>
                        </div> 
                    </div>
                </div>
                {/*Create Account Button*/}
                <a href="/dashboard"><Button text="Create account" /></a> 
            </div>
        </div>
    )
}

export default Signup;
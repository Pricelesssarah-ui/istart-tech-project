import React from "react";
import "./login.css";
import Loginpage from "../assets/Group.png";
import Google from "../assets/Logo.png";
import Button from "./Button/button";


function Login() {
    return(
        <div className="container-login">
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
                    <div className="form">
                        <div>
                            <p>Email Address</p>
                            <input 
                                type="text" 
                                placeholder="insert your email" 
                                className="input"
                            />
                        </div>
                        
                        <div>
                            <p>Password</p>
                            <input 
                                type="password" 
                                placeholder="insert your password"
                            />
                        </div>

                        <div className="check">
                            <div>
                                <input 
                                    type="checkbox"
                                    className="box"
                                /> 
                            </div>
                            
                            <div className="log-pwd">
                                <p>Keep me logged in</p>
                            </div>
                           
                           <div>
                            <p className="fpwd">Forget password?</p>
                           </div>
                           
                        </div> 
                    </div>
                </div>

                <Button text="Sign in" />
        
            </div>
        </div>
    )
}

export default Login;
import React from "react";
import "./login.css";
import Loginpage from "../assets/Group.png";
import Google from "../assets/Logo.png";
import Button from "./Button/button";
import Password from "../assets/password.png";


function Login() {
    return(
        <div className="container-login">
            {/*section 1 */}
            <div className="container-item1">
                <img src={Loginpage} alt="loginpage" />
                <h1>Organize your workflow, boost your productivity</h1>
            </div>

            {/*section 2 */}
            <div className="container-item2">
                <h1>Brand Logo</h1>
                {/*The signin and signup options */}
                <div className="sign-option">
                    <div>
                        <button className="sign-in"> <a href="/login">Sign in</a></button>
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
                        {/*Email Form*/}
                        <div>
                            <p>Email Address</p>
                            <input 
                                type="email" 
                                placeholder="insert your email" 
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
                {/*Sign in Button*/}
                <a href="/dashboard"><Button text="Sign in"  /></a>
        
            </div>
        </div>
    )
}

export default Login;
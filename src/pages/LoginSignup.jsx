import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { MdOutlinePassword, MdEmail } from "react-icons/md";
import '../styles/LoginSignup.css';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? 
                    <div>

                    </div> 
                :
                    <div className="input">
                        <span className="icons"><CiUser /></span>
                        <input type="text" placeholder="Username"></input>
                    </div>
                }
                
                <div className="input">
                <span className="icons"><MdEmail /></span>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className="input">
                <span className="icons"><MdOutlinePassword /></span>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            {action === "Sign Up" ?
                <div>
                </div>
            :
                <div className="forgot-password"><span>Forgot Password?</span></div>
            }
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
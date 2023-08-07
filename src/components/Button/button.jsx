import React from "react";
import "./button.css";


function Button({link, text}) {
    return(
        <div className="btn">
            <a href={link}>{text}</a>
        </div>
    )
}


export default Button;
import React from "react";
import "./button.css";



function Button({link, text}) {
    return(
        <button type="submit" className="btn">
            <a href={link}>{text}</a>
        </button>
    )
}


export default Button;
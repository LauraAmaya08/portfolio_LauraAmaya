import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
    <div>
        <div>
            <Link to= "/"><img src="/images/logo.png" alt="Logo"/></Link>
            <Link to= "/about"><button>ay</button></Link>
        </div>
        
    </div>
    );
}
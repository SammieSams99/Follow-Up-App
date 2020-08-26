import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Jobs Applied For: 10</h3>
            <ul className="nav-links">
                <div class="logo-area">
                   <a href=""><img src="logo.png"/></a>
                </div>
                <Link to="/home">
                <h3>Logout</h3>
                </Link> 
                <Link to="/form">
                <h3>Login</h3>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
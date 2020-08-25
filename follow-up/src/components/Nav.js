import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link>
                   <li>Jobs Applied for</li>
                </Link>
                <Link to="/home">
                <li> Logout</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
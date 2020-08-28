import React from "react";
import { Link } from "react-router-dom";



function Nav(props) {
    // handleLogout e.preventDefault then log person out and return a redirect back to Login page
    
    return (
        <nav>
            <ul className="nav-links">
                <div class="logo-area">
                    <a href=""><img src="logo.png" /></a>
                    {/* could we say <a href="/home"><img src="logo.png"/></a>  ? */}
                </div>
            
                {/* ternery statement, links that we should see when logged in : links that should not   */}

                <>
                    <li><Link to={'/login'}> <h3>Login</h3></Link></li>

                    <li> <Link to={'/registration'}> <h3>Register</h3></Link></li>
                    {/* change to be some sort of link or clickable button with onClick = {handleLogout} */}
                    <li><Link to={'/'} onClick={props.handleLogout}> <h3>Logout</h3></Link></li>
                    {localStorage.getItem('id')? <li><Link to={'/userapps'} > <h3>My Apps</h3></Link></li>:''}
                    {localStorage.getItem('id')? <li><Link to={'/form'} > <h3>New Form</h3></Link></li>:''}
                </>
            </ul>
        </nav >
    );
}



export default Nav;
import React from "react";
import { Link } from "react-router-dom";



function Nav(props) {
    // handleLogout e.preventDefault then log person out and return a redirect back to Login page
    
    return (
        <nav className="Navbar">
            <div className="Navlogo">
                <Link to='/'><h3>Follow Up</h3></Link>
            </div>
                <ul className="listbox">
                    <li className="listitem"><Link to={'/login'}> <h3>Login</h3></Link></li>
                    <li className="listitem"><Link to={'/registration'}> <h3>Register</h3></Link></li>
                    {/* change to be some sort of link or clickable button with onClick = {handleLogout} */}
                    <li className="listitem"><Link to={'/'} onClick={props.handleLogout}> <h3>Logout</h3></Link></li>
                    {localStorage.getItem('id')? <li className="listitem"><Link to={'/userapps'} ><h3>My Apps</h3></Link></li>:''}
                    {localStorage.getItem('id')? <li className="listitem"><Link to={'/form'} > <h3>New Form</h3></Link></li>:''}
                </ul>
        </nav >
    );
}



export default Nav;
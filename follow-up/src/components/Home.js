import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <button onClick={() => this.handleSuccessfulAuth()}>Login</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        
        <nav>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <button onClick={() => this.handleSuccessfulAuth()}>Login</button>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" class="nav-link smoothScroll">Who we are </li>
                    <li className="nav-item" class="nav-link smoothScroll">Testimonials</li>
                    <li className="nav-item" class="nav-link"> Register</li>
                    <li className="nav-item" class="nav-link contact">Log In</li>
                </ul>
        </nav>
        


        
      </div>

     
    );
  }
}
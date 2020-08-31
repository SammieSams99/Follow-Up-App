import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name,email, password} = this.state;
    console.log("submit")
    alert("Thank you! You are now a Follow Up member, please login.")

    axios
      .post(
        "http://localhost:3001/api/v1/auth/register",
        {
          name: name,
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then(response => {

          // this.props.handleSuccessfulAuth(response.data);
          console.log("created")
          console.log(response.data)
          localStorage.setItem("id", response.data._id)
          localStorage.setItem("name", response.data.name)
        }
      )
      .catch(error => {
        console.log("registration error", error);
      });
    
  }

  render() {
    return (
      <div className= 'reg'>
        <form onSubmit={this.handleSubmit} className="regform">
        <h3>Please fill out the form below:</h3>
        <p>Name:</p>
        <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <p> Confirm Password:</p>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
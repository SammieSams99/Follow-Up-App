import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: localStorage.getItem("id"),
        jobType: "full time",
        appliedThrough: "linkedin"
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    myJobTypeHandler= (event) => {
      // let jobType = event.target.value
      this.setState({
      jobType: event.target.value
      }
      )
    }

    appliedThroughHandler= (event) => {
      this.setState({
        appliedThrough: event.target.value
      }
      )
    }

    onSubmit = (event) => {
      event.preventDefault()
      console.log({...this.state})
      console.log("follow up")
      alert("Reminder created! Click My Apps to view your scheduled reminders") 
      axios.post("http://localhost:3001/api/v1/forms", {
        ...this.state
      }, {
        withCredentials: true
      })
      .then(function(res){
        console.log(res, "this is the res")
      })
      .catch(function(error){
        console.log(error)
      })
    }
    render() {
      const name = localStorage.getItem("name")
      return (
        <> 
        {name ? <h1>Welcome, {name}</h1> : "" }
        <form onSubmit = {this.onSubmit} className="userform">
        <h1 style={{textShadow: "2px 2px antiquewhite"}}>Add Application Info</h1>
        <p>Company Name:</p>
        <input
          type='text'
          name='name'
          onChange={this.myChangeHandler}
        />
        <p>Job Title:</p>
        <input
          type='text'
          name='title'
          onChange={this.myChangeHandler}
        />
        <p>Job Location:</p>
        <input
          type='text'
          name='location'
          onChange={this.myChangeHandler}
          />
          <p>Date Applied:</p>
        <input
          type='date'
          id= "appdate"
          name= "appdate"
          onChange={this.myChangeHandler}
          />
          <p>Job Type:</p>
        <select onChange={this.myJobTypeHandler}>
          <option value="full time">Full Time</option>
          <option value="part time">Part Time</option>
          <option value="contract">Contract</option>
        </select> 
        <p>Applied Through:</p>
        <select onChange={this.appliedThroughHandler}>
          <option value="linkedin">LinkedIn</option>
          <option value="Career Builder">Career Builder</option>
          <option value="Glass Door">Glass Door</option>
          <option value="Indeed">Indeed</option>
          <option value="Zip Recruiter">Zip Recruiter</option>
          <option value="Robert Half">Robert Half</option>
          <option value="Google">Google</option>
        </select>
          <p>Follow Up Date:</p>
        <input
          type="datetime-local"
          id= "followupdate"
          name= "followupdate"
          onChange={this.myChangeHandler}
        />
        <input className="followupButton" type="submit" value="Follow Up"/>
        </form>
        </>
      );
    }
  }

export default Form;
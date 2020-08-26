import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
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
        <select name="Jobtype">
          <option value="full time">Full Time</option>
          <option value="part time">Part Time</option>
          <option value="contract">Contract</option>
          onChange={this.myChangeHandler}
        </select>
        <p>Applied Through:</p>
        <select>
          <option value="linkedin">LinkedIn</option>
          <option value="Career Builder">Career Builder</option>
          <option value="Glass Door">Glass Door</option>
          <option value="Indeed">Indeed</option>
          <option value="Zip Recruiter">Zip Recruiter</option>
          <option value="Robert Half">Robert Half</option>
          <option value="Google">Google</option>
          onChange={this.myChangeHandler}
        </select>
          <p>Follow Up Date:</p>
        <input
          type="datetime-local"
          id= "followupdate"
          name= "followupdate"
          onChange={this.myChangeHandler}
        />
        <input type="submit" value="Follow Up"/>
        </form>
      );
    }
  }

export default Form;
import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import './App.css'

const form = {
  companyName: "Sony",
  jobTitle: "Software Engineer",
  location: "New York",
  jobType: "Full Time",
  appliedThrough: "Indeed",
  remindDate:"September 10, 2020"
}



ReactDOM.render(
  <Form 
    companyName= {form.companyName}
    jobTitle= {form.jobTitle}
    location= {form.location}
    jobType= {form.jobType}
    appliedThrough= {form.appliedThrough}
    remindDate= {form.remindDate}
  />,
  document.getElementById('root')
);

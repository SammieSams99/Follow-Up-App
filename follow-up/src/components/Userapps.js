import React, { Component } from "react";
import axios from 'axios';

// this is where axios.GET request will be made ADD CREDENTIALS


class Userapps extends Component {
  state = {
    form: [] 
  }
  componentDidMount() {
  axios.get("http://localhost:3001/api/v1/forms",{
    withCredentials: true
  })
  .then(res => {
    console.log(res)
    console.log(res.data.forms)
    this.setState({
      
      form: res.data.forms,
      
    })
  }

  )}

  render () {
    console.log(this.state.form)
    // const apps = this.state.form.map()
    return (
      <>

      <div className= "apppage">
        <h1>
          Here are your apps
        </h1>
      </div>
    {this.state.form && this.state.form.map((app) => <p> {app.name } </p>)}
      </>
    )
  }
}




export default Userapps;
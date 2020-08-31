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
    this.setState({
      data: {
        form: res.data.forms,
      }
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

      </>
    )
  }
}




export default Userapps;
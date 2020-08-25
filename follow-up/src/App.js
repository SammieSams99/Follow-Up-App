import React, { Component} from 'react';
import './App.css';
import {addApplication, deleteApplication, deleteAllApplications} from './userActions/index';
import moment from 'moment';
import Routes from './config/routes'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      title: '',
      location:'',
      appDate:'',
      followUpDate:''
    };
  }

  addApplication() {
    this.props.addApplication(this.state.name, this.state.title, this.state.location, this.state.appDate, this.state.followUpDate);
    this.setState({name: '', title: '', location: '', appDate: '', followUpDate: ''})
  }

  deleteApplication(id){
    this.props.deleteApplication(id);
  }
  deleteAllApplications(){
    this.props.deleteAllApplications();
  }

//   render() {
//     const { applications } = this.props;
//     return (
//       <ul className="list-group">
//         {
//           applications.map((application) => {
//             return (
//               <li key={application.id} className="list-group-item">
//                 <div className="list-item">
//                   <div>{application.name}</div>
//                   <div><em>{moment(new Date(applications.followUpDate)).fromNow()}</em></div>
//                 </div>
//                 <div className="list-item delete-button"
//                   onClick = {() => this.deleteApplication(application.id)}
//                   >
//                 </div>
//               </li>
//             )
//           })
//         }
//       </ul>
//     );
//   }
      render() {
        return (
          <Routes/>
        )
      }
}


export default App;

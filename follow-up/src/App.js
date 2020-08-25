import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import { BrowserRouter as Router, Switch, Route} from'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/form" component={Form}/>
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
      </Switch>
    </div>
    </Router>
  );
}






export default App;

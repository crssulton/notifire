import React, { Component } from 'react';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from 'firebase';
import {DB_CONFIG} from './Config';

// landing page
import Header from './view/landing/header';
import Footer from './view/landing/footer';
import Home from './view/landing/home';
import Login from './view/landing/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
    firebase.initializeApp(DB_CONFIG);
  }
  
  render() {
    let komponen = null;

    if((cookie.load('access') === 'undefined' && cookie.load('role') === 'undefined') || (cookie.load('access') === undefined && cookie.load('role') === undefined)){
      komponen = (
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Footer/>
          </div>
        </Router>
      )
    }

    else if(cookie.load('access') !== 'undefined' && cookie.load('role') === "1"){
      komponen = (
        <div>
          <Header/>
          <Footer/>
        </div>
      )
    }

    else if(cookie.load('access') !== 'undefined' && cookie.load('role') === "2"){
      komponen = (
        <div>
          <Header/>
          <Home/>
          <Footer/>
        </div>
      )
    }

    return (
      <div className="App"> 
        {komponen}
      </div>
    );
  }
}

export default App;

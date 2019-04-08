import React, { Component } from 'react';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// landing page
import Header from './view/landing/header';
import Footer from './view/landing/footer';
import Home from './view/landing/home';

class App extends Component {
  
  render() {
    console.log(cookie.load('access')+" "+cookie.load('role')+" "+cookie.load('user_id'));
    let komponen = null;

    if((cookie.load('access') === 'undefined' && cookie.load('role') === 'undefined') || (cookie.load('access') === undefined && cookie.load('role') === undefined)){
      komponen = (
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
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

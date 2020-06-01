import React, { Component } from 'react';
import './component/css/App.css';
import './component/css/Top_header.css';
import './component/css/Header.css';
import './component/css/Footer.css';
import Header from './Header';
import Top_header from './Top_header';
import Footer from './Footer';

import {

  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect

} from "react-router-dom";

//page


import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Gigs from "./pages/Gigs";
import Photos from "./pages/Photos";
import About from "./pages/About";


class App extends Component {
  render() {
    return (


    <Router> 

  <Top_header />
  <Header />



  <Switch>

 <Route exact path ="/404" component={NotFoundPage} />
 <Route exact path ="/Home" component={Home} />
 <Route exact path ="/Register" component={Register} />
 <Route exact path ="/SignIn" component={SignIn} />
 <Route exact path ="/Gigs" component={Gigs} />
 <Route exact path ="/Photos" component={Photos} />
 <Route exact path ="/About" component={About} />

 <Redirect to ="/404" />

  </Switch>



   </Router> 




);
  }
}
export default App;
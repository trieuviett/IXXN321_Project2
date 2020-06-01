import React, { Component } from 'react';
import './component/css/Top_header.css';
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (

      <div className="Top_header">
        
          

  <div className="apptopheader" id="myheader">

  <div className="inner_topheader">

  <ul className="topnavigation">
    <Link to="/Register"><li>Register</li></Link>
    <Link to="/Signin"><li>Sign In</li></Link>
 
  
    <a><li><input type="text" placeholder="Search..."/></li></a>
  </ul>

</div>
</div>



      </div>
    );
  }
}
export default App;
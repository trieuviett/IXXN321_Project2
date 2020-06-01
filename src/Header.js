import React, { Component } from 'react';
import './component/css/Header.css';
import { Link } from "react-router-dom"
class Header extends Component {
  render() {
    return (

      <div className="Header">
        <header>
          

  <div className="appheader" id="myheader">

  <div className="inner_header">

    <div className="logo_container">
    <Link to="/Home"><img class="logo" src={require("./component/img/Logo.png")}/></Link>
  </div>
  <ul className="navigation">
    <Link to="/Gigs"><li>Gigs</li></Link>
    <Link to="/Photos"><li>Photos</li></Link>
    <Link to="/About"><li>About</li></Link>
  
  </ul>

</div>
</div>

      </header>

       
      </div>
    );
  }
}
export default Header;
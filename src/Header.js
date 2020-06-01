import React, { Component } from 'react';
import './component/css/Header.css';
import { NavLink, Link } from "react-router-dom"


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
    <NavLink to="/Gigs" activeStyle={{ borderBottom: 'solid 3px #fff'}}><li>Gigs</li></NavLink>
    <NavLink to="/Photos" activeStyle={{ borderBottom: 'solid 3px #fff'}}><li>Photos</li></NavLink>
    <NavLink to="/About" activeStyle={{ borderBottom: 'solid 3px #fff'}}><li>About</li></NavLink>
  
  </ul>

</div>
</div>

      </header>

       
      </div>
    );
  }
}
export default Header;
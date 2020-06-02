import React, { Component } from 'react';
import './component/css/Filter.css';
import { NavLink, Link } from "react-router-dom"


 class Filter extends Component {
  render() {

    return (

      <div className="filter">
        <header>
          

  <div className="appfilter" id="myheader">

  <div className="inner_filter">

  <ul className="filternavigation">
    <NavLink to="#" ><li>Region</li></NavLink>
    <NavLink to="#" ><li>Time</li></NavLink>
    <NavLink to="#" ><li>Date</li></NavLink>
    <NavLink to="#" ><li>Style</li></NavLink>
  
  </ul>

</div>
</div>

      </header>

       
      </div>
    );
  }
}
export default Filter;
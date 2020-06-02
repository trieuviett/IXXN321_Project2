import React from 'react';

import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import '../component/css/About.css';
import '../component/css/Filter.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';
import Filter from '../Filter';
import {

  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink

} from "react-router-dom";


const About = () => {

return (

 <div>


<div class="text1">
  <h1>Our services</h1>
<p>We offer professional digital platform for both musicians and audiences so musicians 
can promote and sell tickets of their shows, while audiences can easily find what they are interested in. </p>
</div>


<div className="sec3">
<div className="text1">
<h1>Our Core Values</h1>
</div>

<div className="column2">
  <h3> Trustworthy</h3>
  <p className="aboutp"> Our quality evaluation team make sure that your show will be
equally promoted with other bands on the website.</p>
  </div>

  <div className="column2">
  <h3> Speed</h3>
  <p>Just a few clicks and forms to fill in, your show will instantly on our server. You also have flexibilites
  to change details later on</p>
  </div>

  <div className="column2">
   <h3> Satisfaction</h3>
   <p>The pleasure of musicians successfully promote their show and the pleasure
   of audiences found their loved band are our most valuable asset.</p>

</div>
</div>


<div className="sec21">
  
<div className="row">
  <div className="column5">
    <img className ="img-avatar" src={require("../component/img/1.jpg")} alt="Sedan"/>
  </div>
  <div className="column5">
    <img className ="img-avatar" src={require("../component/img/1.jpg")} alt="Suv"/>
  </div>
</div>
</div>

<div className="sec211">
  
<div className="row">
  <div className="column5">
    <h5>Viet Lu</h5>
    <h2>CEO</h2>
  </div>
  <div className="column5">
    <h5>Hung Ton</h5>
    <h2>Expert</h2>
  </div>
</div>
</div>

<Footer />
</div>
	);
};

export default About;



import React from 'react';

import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import '../component/css/About.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';



const About = () => {

return (

 <div>


<div class="text1">
  <h1>Our services</h1>
  <br/>
<p>We offer professional car and motorbike rental services with various range of vehicles</p>
</div>


<div className="sec3">
<div className="text1">
<h5>Our Core Values</h5>
</div>

<div className="column2">
  <h6> Trustworthy</h6>
  <p> Our quality evaluation team make sure that your car will be
the same as what you see on the website.</p>
  </div>

  <div className="column2">
  <h6> Speed</h6>
  <p>Not about the speed of your car! It’s about the flexible access
and smooth transaction.</p>
  </div>

  <div className="column2">
   <h6> Satisfaction</h6>
   <p>Customer services is our pride and competitive advantages.
The pleasure of customer is our most valuable asset.</p>

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
    <h5>Neve Hoyte</h5>
    <h2>Car and Marketing Expert</h2>
  </div>
  <div className="column5">
    <h5>Hieu Pham</h5>
    <h2>E-commerce Expert</h2>
  </div>
</div>
</div>

<Footer />
</div>
	);
};

export default About;



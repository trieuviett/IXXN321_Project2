import React from 'react';

import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import '../component/css/Gigs.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';



const OKiaBand = () => {

return (

 <div>


<div class="sec2">
  
<div class="row">
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band1.JPG")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band2.JPG")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band3.JPG")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band4.JPG")}/>
  </div>
</div>
</div>


<div class="sec2">
  
<div class="row">
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band5.JPG")}/>
  </div>
  <div class="column1">
   <img class ="img-square3" src={require("../component/img/band6.JPG")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band7.JPG")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band8.jpg")}/>
  </div>
</div>
</div>


<div class="sec2">
  
<div class="row">
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band9.jpg")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band10.jpg")}/>
  </div>
  <div class="column1">
    <img class ="img-square3" src={require("../component/img/band11.jpg")}/>
  </div>

</div>
</div>




</div>
	);
};

export default OKiaBand;


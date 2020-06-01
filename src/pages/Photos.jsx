import React from 'react';
import { Link } from "react-router-dom"

import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import '../component/css/Gigs.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';


import ima1 from '../component/img/1.jpg';



const Photos = () => {

return (

<React.Fragment>

<Link to="/O-Kia-Band-2016">
<section className="Photo"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/1.jpg")}/>
			</div>
			<div className="g-70 padded">
				<h3>O Kia Band</h3>
				<p> The Adolescence Night</p>
				<p> Hotel Grand - 2016 </p>	
				
			</div>
		</div>
</section>		
</Link>



<Footer />

</React.Fragment>

	);
};

export default Photos;



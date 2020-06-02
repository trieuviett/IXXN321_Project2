import React from 'react';
import Media from 'react-bootstrap/Media'
import { Link } from "react-router-dom"

import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import '../component/css/Gigs.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';


import ima1 from '../component/img/1.jpg';



const Gigs = () => {

return (

<React.Fragment>



<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G1.jpg")}/>
			</div>
			<div className="g-70 padded">
				<h3>Tin Hut Live</h3>
				<p>WED 3RD JUNE</p>

				<p>The Tin Hut, Featherston</p>
					
				
			</div>
		</div>
</section>		
</Link>

<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G2.jpg")}/>
			</div>
			<div className="g-70 padded">
				<h3>elbow - Postponed</h3>
				<p>THU 4TH JUNE</p>

				<p> Auckland Town Hall, Auckland</p>
					
				
			</div>
		</div>
</section>		
</Link>

<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G3.jpg")}/>
			</div>
			<div className="g-70 padded">
				<h3>The Circling Sun</h3>
				<p>FRI 5TH JUNE</p>
				<p>Ponsonby Social Club, Auckland</p>
					
				
			</div>
		</div>
</section>		
</Link>


<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G4.jpg")}/>
			</div>
			<div className="g-70 padded">
				<h3>Under The Arcade Presents - Tooms And Repair</h3>
				<p>FRI 5TH JUNE</p>
				<p> The Wine Cellar, Auckland</p>
					
				
			</div>
		</div>
</section>		
</Link>

<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G5.jpeg")}/>
			</div>
			<div className="g-70 padded">
				<h3>The Jac: A Gathering - Album Release</h3>
				<p>FRI 5TH JUNE</p>
				<p>The Third Eye, Wellington</p>
					
				
			</div>
		</div>
</section>		
</Link>

<Link to="#">
<section className="Gigs"> 
		<div className="g-row">
			<div className="g-30">
				<img className="Bandphoto" src={require("../component/img/G6.jpeg")}/>
			</div>
			<div className="g-70 padded">
				<h3>Under The Arcade Presents - Tooms And Repair</h3>
				<p>FRI 5TH JUNE</p>
				<p> The Wine Cellar, Auckland</p>
					
				
			</div>
		</div>
</section>		
</Link>

<br/>
<br/>


<Footer />

</React.Fragment>

	);
};

export default Gigs;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


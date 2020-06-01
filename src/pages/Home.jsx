import React from 'react';
import { Link } from "react-router-dom"
import '../component/css/Home.css';
import '../component/css/Top_header.css';
import '../component/css/Header.css';
import '../component/css/Footer.css';
import Header from '../Header';
import Top_header from '../Top_header';
import Footer from '../Footer';
import Background from '../component/img/room.jpg';


const Home = () => {

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

};

return (

<React.Fragment >


<section style={ sectionStyle }>
<div className="home">
    		<div>
    			<h1>Introduction</h1>
    		</div>
    		<div>
    			<p>If music is considered the best language to bring people together, live music is the grammar of that language. Gigs and bands are exsisting in every corner of the world, from small towns to big cities, but it is such a challenge for people to know about them, as small indie gigs and bands are not usually well-advertised. 
Bandfinder is create based on the idea to connect gigs and bands with exsisted audiences as well as potential audiences, letting their informations like showtimes, locations and gernes widely reachable in the matter of seconds.</p>
    		</div>
    		<Link  className="button3" to="/Gigs">
        <nav>Next</nav>
        </Link>
</div>
 </section>
 

<Footer className="homefooter" style={{position:"fixed"}} />

</React.Fragment>
	);
};

export default Home;




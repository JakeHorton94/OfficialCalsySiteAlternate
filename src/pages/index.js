import React from "react"
import '../components/generalStyling.scss';
import './landing.scss';
import { Link } from "gatsby"



const LandingPage = () => (
<div>
<div id="landing-header">
<div className="landing">
    <Link to="/home">
<img className="landingLogo" src="https://i.imgur.com/VCbf2mP.png" /> 
</Link>
</div>
    </div>
    
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    
    </div>
)
export default LandingPage
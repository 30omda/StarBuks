import "./Hero.css";
import $ from "jquery";
import { Link } from "react-router-dom";
const Hero = () => {
//------- make hero img resizing with screen dimentions
$(function () {
    'use strict';   
    $('.hero').height($(window).height());
    $('.hero').width($(window).width());

    $(window).resize(function() {
        $('.hero').height($(window).height());
    $('.hero').width($(window).width());

    })
});
    return(
<>
<div className="hero ">
     <div className="hero-img  d-flex align-items-center">
          <div  className="hero-content">
                <h2>FREE COFFEE <br/> IS A TAP AWAY</h2>
                <p>Join now to start earning Rewards.</p>
                <Link className="hero-button mt-3 "to="/login">Join now</Link>
                <p className="mt-3 ">Or <a href="">join in the app</a> for the best experience</p>
        </div>
    </div>
</div>
</>
    )    
}
export default Hero;
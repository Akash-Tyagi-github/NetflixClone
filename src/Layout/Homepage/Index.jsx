import React from 'react'
import netflixlogo from "../../Assets/netflixlogo.png"
import bckimg from "../../Assets/netflixbckgrndimg.jpg"
import "./Index.css"
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className='main'>
     <div className='Navbar1'>
        <img src={netflixlogo} style={{width:"200px",height:"80px"}}/>
        <div className='btns'>
           <button id="btn1">English</button>
           <Link to="/login">  <button id="btn2">
            Sign In
           </button>
            </Link>
        </div>
     </div>
     <div className='body'>
        <h1 id="line1">Unlimited movies, Tv</h1>
        <h1 id="line1">shows and more.</h1>
        {/* <p id="line1">Unlimited movies, Tv</p> */}
        {/* <p id="line1">shows and more.</p> */}
        <p id="line2">Watch anywhere. Cancel anytime.</p>
        <p id="line3">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='inputbox'>
            <input id="inputfield" placeholder='Email address'/>
            <button id="inputbtn">Get Started  </button>
        </div>
     </div>
    </div>
  )
}

export default Index
import React from "react";
import "./Signup.css"
import netflixlogo from "../../Assets/netflixlogo.png";
import Form from "./Form";
import Footer from "../Pages/Footer/Footer"
const Signup = () => {
  return (
    <>
      <div className="main1">
        <div className="Navbar">
          <img src={netflixlogo} style={{ width: "200px", height: "80px" }} />
        </div>
        <div className="forms">
        <Form/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Signup;

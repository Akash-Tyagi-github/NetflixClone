import React from "react";
// import "./index.css";
import "../Page1/index.css"
import tv from "../../../Assets/tv.jpg";
const Page2 = () => {
  return (
    <div className="page1">
      <div className="page1main">
      <div className="video">
          <img src={tv} style={{width:"70%"}}/>
        </div>
        <div className="content">
          <h1 id="first">Enjoy on your Tv.</h1>
          <h1 id="second">Watch on smart Tvs,PlayStation,Xbox,</h1>
          <h1 id="second">Chromecast,Apple TV,Blu-ray players and</h1>
          <h1 id="second">more.</h1>
        </div>
       
      </div>
    </div>
  );
};

export default Page2;

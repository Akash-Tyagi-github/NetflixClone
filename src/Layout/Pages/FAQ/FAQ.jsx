import React, { useState } from "react";
import questions from "../../../Assets/QandAbank";
import "./FAQ.css";
const FAQ = () => {
  const [change,setChange]=useState(true);
  const display=()=>{
      setChange(!change)
  }
  return (
    <div className="FAQ">
      <h1 id="chck">Frequently Asked Questions</h1>
      {questions.map((ques,index) => {
        console.log(index);
        return (
          <>
          <div key={index}>
            <div className="questions">
              <div className="question1">
                <h1 id="ques">{ques.ques}</h1>
                <button id="plusbtn" onClick={display}>
                  +
                </button>
              </div>
            </div>
            <div className={change ? `hide` : `display`}>
              <h1 id="answercontent">{ques.ans}</h1>
            </div>
          </div>
          </>
        );
      })}
       <p id="line3">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='inputbox'>
            <input id="inputfield" placeholder='Email address'/>
            <button id="inputbtn">Get Started  </button>
        </div>
    </div>
  );
};

export default FAQ;

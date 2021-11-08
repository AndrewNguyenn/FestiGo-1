import React, { Component, useState, useEffect } from "react";
import { DateRangePicker } from 'react-date-range';
const tool = require('../../server/tool');
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Switch
} from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime"
import Feedback from "./Feedback.jsx";
import ResultsDisplay from './ResultsDisplay.jsx';


const UserGreeting = (props) => {
  const { sCalHandler, eCalHandler, feedback, handleClick } = props;
 
  

    return (
    <div>
     {/* <ResultsDisplay results={result}/> */}
      <h1 className='welcomeBack'>Welcome to FestiGo</h1>
      <h5 className='whenLook'>When do you want to go?</h5>
      <div className="calandarPick">
        <label for="start">Start: </label>
        <input 
		  		type="date" id="start" 
		  		name="trip-start"
          onChange={sCalHandler}
      		min="2020-01-01" 
		  		max="2022-12-31">
		  	</input>
        <label for="end">  End: </label>
        <input 
		  		type="date" id="end" 
		  		name="trip-end"
          onChange={eCalHandler}
      		min="2020-01-01" 
		  		max="2022-12-31">
		  	</input>
        <button className='button' onClick={handleClick}>Submit</button>
      </div>
      <h5 className= 'whenLook'> <Feedback feedback={feedback}/> </h5>
      <iframe className='video' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="534" height="300" type="text/html" src="https://www.youtube.com/embed/nNe4RUHpLWI?autoplay=1&mute=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=400&end=0&origin=http://youtubeembedcode.com">
			</iframe>
    </div>
  )
}
export default UserGreeting;
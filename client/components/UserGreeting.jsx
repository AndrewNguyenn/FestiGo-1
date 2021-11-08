import React from "react";
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

const UserGreeting = (props) => {
  const { user } = props;
  //handle the calander when the date is chosen it will sent a post request to the server
  //and the server will handle the req body and redirect to the events page
  let result;
  let startDate = [];
  let endDate = [];
  let selectedCountry = "";
  let selectedState = "";
  let countryArr = [];
  let stateArr = [];
  let feedback = "";

  const sCalHandler = (e) => {
    let dateArr = e.target.value.split("-");
    console.log(dateArr)
    startDate.push(dateArr);
    startDate.push(tool.getDays(dateArr[0], dateArr[1], dateArr[2]));
    validateDate();
  }
  const eCalHandler = (e) => {
    let dateArr = e.target.value.split("-");
    endDate.push(dateArr)
    endDate.push(tool.getDays(dateArr[0], dateArr[1], dateArr[2]));
    validateDate();
  }
  const countryHandler = (e) => {
    // after country dropdown
  }
  const stateHandler = (e) => {
    // after state dropdown
  }

  const validateDate = async() => {
    console.log(startDate)
    console.log(!endDate.length)
    if (!startDate.length) {
      feedback = "please choose start date"
    } else if (!endDate.length) {
      feedback = "please chose end date"
    } else if (startDate[1] <= endDate[1]) {
      console.log("this is valid date");
      await getCountry(startDate[0], endDate[0]);
      // await getInfo(startDate[0], endDate[0], selectedCountry, selectedState);
    } else {
      console.log("invalid date")
      // feedback user to reselect the date and refresh the calendar?
    }
    console.log(feedback)
  }

  // const getCountry = (sDateArr, eDateArr, country = "", state = "") => {
  //   const body = {
  //     startYear: sDateArr[0],
  //     startMonth: sDateArr[1],
  //     startDay: sDateArr[2],
  //     endYear: eDateArr[0],
  //     endMonth: eDateArr[1],
  //     endDay: eDateArr[2],
  //     country: "",
  //     state: "",
  //   }
  //   console.log('in get Country', body)
  //   fetch("/api/country", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //   .then (res => {
  //     console.log("444444")
  //     // console.log(res.json())
  //     console.log(res)
  //     return res.json();
  //   })
  //   .then (data => {
  //     result = data;
  //     console.log('RESULT', result)
  //     // console.log('handle calendar', data)
  //     // const countryData = data;
  //     // console.log("444444")
  //     // console.log(countryData)
  //     // feedback = toString(countryData)
  //   })
  //   .catch (err => console.log('UserGreeting fetch /api/country: ERROR: ', err))
  //     console.log("777777")
  // };
  // const getInfo = (sDateArr, eDateArr, country = "", state = "") => {
  //   const body = {
  //     startYear: sDateArr[0],
  //     startMonth: sDateArr[1],
  //     startDay: sDateArr[2],
  //     endYear: eDateArr[0],
  //     endMonth: eDateArr[1],
  //     endDay: eDateArr[2],
  //     country: "",
  //     state: "",
  //   }
  //   fetch("/api/country", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //   .then (res => res.json())
  //   .then (data => {
  //     console.log('handle calendar', data)
  //     const countryData = data;
  //     console.log("444444")
  //     console.log(countryData)
  //   })
  //   .catch (err => console.log('UserGreeting fetch /api/country: ERROR: ', err))
  //     console.log("777777")
  //     console.log(countryData)
  // };
  
    return (
    <div>
      <h1 className='welcomeBack'>Welcome back {user}</h1>
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
      </div>
      <h5 className= 'whenLook'> {feedback} </h5>
      

    </div>
  );
}
export default UserGreeting;
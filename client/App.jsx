import React, { Component, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Switch,
	Redirect
} from "react-router-dom";
import  UserGreeting from './components/UserGreeting.jsx';
import Login from './components/Login.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';
const tool = require('../server/tool');
import "./scss/styles.scss";



const App = (props) => {
    const [user, setUser] = React.useState(null);
		//send a post request to the server to get the user
		React.useEffect(() => {
			fetch('/api/user')
				.then(res => res.json())
				.then(data => {
					setUser(data);
				});
		}, []);
	let getData = false;

  const [ feedback, feedUpdate ] = useState("");
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ searchData, setSearchData ] = useState('');
  const [ flag, setFlag ] = useState(false)
	
  let result;
  let infoRes;
  let selectedCountry = "";
  let selectedState = "";
  let countryArr = [];
  let stateArr = [];

  const sCalHandler = (e) => {
    let tmpArr = [];
    let sDateArr = e.target.value.split("-");
    tmpArr.push(sDateArr)
    tmpArr.push(tool.getDays(sDateArr[0], sDateArr[1], sDateArr[2]));
    setStartDate(tmpArr)
    validateDate();
  }

  const eCalHandler = (e) => {
    let tmpArr = []
    let eDateArr = e.target.value.split("-");
    tmpArr.push(eDateArr);
    tmpArr.push(tool.getDays(eDateArr[0], eDateArr[1], eDateArr[2]));
    setEndDate(tmpArr)
    validateDate();
  }
  const countryHandler = (e) => {
    // after country dropdown
  }
  const stateHandler = (e) => {
    // after state dropdown
  }

  const validateDate = async() => {
    if (!startDate.length) {
      feedUpdate("please choose start date")
    } else if (!endDate.length) {
      feedUpdate("please chose end date")
    } else if (startDate[1] <= endDate[1]) {
      feedUpdate("this is valid date");
      await getSearch(startDate[0], endDate[0]);
      await getInfo(startDate[0], endDate[0], selectedCountry, selectedState);
    } else {
      feedUpdate("invalid date, try again")
    }
    console.log(feedback)
  }

  const processInfo = (infos) => {
    console.log('in processInfo, ', infos)
    let tmpArr = [];
    let infoStr = `Top nation    --    < ${infos[0][0].country}:   ${infos[0][0].cc} events > . . .
                    Top city    --   < ${infos[2][0].city}:   ${infos[2][0].cc} events >`
    feedUpdate(infoStr)
  }

  const getSearch = (sDateArr, eDateArr, country = "", state = "") => {
    const body = {
      startYear: sDateArr[0],
      startMonth: sDateArr[1],
      startDay: sDateArr[2],
      endYear: eDateArr[0],
      endMonth: eDateArr[1],
      endDay: eDateArr[2],
      country: "",
      state: "",
    }
    console.log('in get searchResult', body)
    fetch("/api/searchRes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then (res => {
      console.log("444444")
      return res.json();
    })
    .then (data => {
      result = data;
      console.log('SEARCH RESULT', result)
	  setSearchData(result);
    })
    .catch (err => console.log('UserGreeting fetch /api/country: ERROR: ', err))
  };

  const getInfo = (sDateArr, eDateArr, country = "", state = "") => {
    const body = {
      startYear: sDateArr[0],
      startMonth: sDateArr[1],
      startDay: sDateArr[2],
      endYear: eDateArr[0],
      endMonth: eDateArr[1],
      endDay: eDateArr[2],
      country: "",
      state: "",
    }
    fetch("/api/mostArea", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then (res => {
      return res.json();
    })
    .then (data => {
      console.log('GET INFO RESULT', data)
      infoRes = data;
      processInfo(infoRes)
    })
    .catch (err => console.log('UserGreeting fetch /api/country: ERROR: ', err))
  };
	const handleClick = () => {
    setFlag(true);
    return;
  }
    return (
		<Router>
			<div className="wholeContainer">
      <div className="mainContainer">
				<div className="selectionContainer">
				<Switch>
					<Route exact path="/">
  					{flag ? <Redirect to="/change" /> : <UserGreeting sCalHandler={sCalHandler} eCalHandler={eCalHandler} feedback={feedback} handleClick={handleClick}/>}
					</Route>

				<Route exact path = "/change">		
				component = <ResultsDisplay results={searchData}/> 
				</Route>

					{/* <Route exact path = "/"		
					component = {UserGreeting} /> */}
				</Switch>	
				</div>
      </div>
			
			</div>
			</Router>
    );
};

export default App;

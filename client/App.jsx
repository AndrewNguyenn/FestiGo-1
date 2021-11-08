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

    return (
		<Router>
			<div className="wholeContainer">
      <div className="mainContainer">
				<div className="selectionContainer">
				<Switch>
				<Route exact path="/">
  				{getData ? <Redirect to="/change" /> : <UserGreeting />}
				</Route>

				<Route exact path = "/change"		
				component = {Login} />

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

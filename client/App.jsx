import React, { Component, useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Switch
} from "react-router-dom";
import  UserGreeting from './components/UserGreeting.jsx';


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
		
    return (
		<Router>
			<div className="wholeContainer">
      <div className="mainContainer">
				<div className="selectionContainer">
				<Switch>
					<Route exact path = "/"		
					component = {UserGreeting} />
				</Switch>	
				</div>
      </div>
			{/* <iframe className='video' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="534" height="300" type="text/html" src="https://www.youtube.com/embed/nNe4RUHpLWI?autoplay=1&mute=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=300&end=0&origin=http://youtubeembedcode.com">
			</iframe> */}
			</div>
			</Router>
    );
};

export default App;

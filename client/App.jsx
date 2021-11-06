import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Switch
} from "react-router-dom";
import  UserGreeting from './components/UserGreeting.jsx';
import  NavBar  from './components/NavBar.jsx';


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
			<div className="wholeContainer">
      <div className="mainContainer">
        {/* <NavBar /> */}
				<div className="selectionContainer">
					<UserGreeting user={user}/>
					
				</div>
      </div>
			<video autoPlay muted loop className="video">
				<source src='https://r4---sn-ab5szne7.googlevideo.com/videoplayback?expire=1636232865&ei=QZqGYceGI4aSyQWs1JRw&ip=194.33.9.10&id=o-AAUTuLlT2vnxT2JbA1rzcQWe-giBvHvcGoOlVHSjGuZG&itag=400&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=KIH32Me_-cmE4O6MI2_WFjEG&gir=yes&clen=526573663&dur=880.760&lmt=1632389036940295&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5532434&n=ZrsKiTC84ipft_O_&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKQ6jU5V4aAW_eRkQXDs8kEeeK9HJPoroq-fuOpOFr7eAiAHu4IE6K83ESt0aTO-JaSafjibuqnPYUwMxYt6jN-T2A%3D%3D&ratebypass=yes&rm=sn-pivhx-n8vl7l,sn-5gol67z&req_id=1b2a339396dea3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=tM&mip=2603:7000:a940:361b:d811:f09d:3bd1:cd52&mm=29&mn=sn-ab5szne7&ms=rdu&mt=1636210861&mv=m&mvi=4&pl=37&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAI_tSMdlie3lqZbsT7ypCqRT8rgYUooMIGZ5zEF5pHZ3AiArtOLijXqZjVR742Rc3Pcxul0RevL3deFrzjbDNRYdvg%3D%3D' type="video/mp4"/>
			</video>
			</div>
    );
};

export default App;

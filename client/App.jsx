import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Switch
} from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import TopicsDisplay from "./components/TopicsDisplay.jsx";

import "./scss/styles.scss";

const App = props => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/"
                    component={Home}/>
                <Route exact path="/topics/:topicId"
                    component={TopicsDisplay}/>
            </Switch>
        </Router>
    );
};

export default App;

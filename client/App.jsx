import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Switch
} from "react-router-dom";

import  NavBar  from './components/NavBar.jsx';


// import "./scss/styles.scss";

const App = props => {
    return (
        <div>
            <NavBar />
        </div>
    );
};

export default App;

import React from 'react';
import {render} from 'react-dom';
import fetch from "node-fetch";


import App from './App.jsx';

const rootElement = document.getElementById("app");

render (
        <App/>,
    rootElement
);

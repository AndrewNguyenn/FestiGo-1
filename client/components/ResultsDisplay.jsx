import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';

const displayResults = [
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    },
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    },
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    },
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    },
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    },
    {
        img : "url",
        title: "Event title",
        eventInfo: "Event information here",
        eventDescription: "Detailed description here",
        eventLocation: "Event location here"
    }
]

const ResultsDisplay = props => {

const results = displayResults.map((event, idx) => {
    return <ResultMainContainer eventObj ={event} key ={idx}/>
});
    return(
        <div class="landingPage">
            <div class="displayPage">
          {results}
            </div>
        </div>
    );
}

export default ResultsDisplay;
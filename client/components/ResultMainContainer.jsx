import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
// import ResultImageDisplay from './ResultImageDisplay.jsx';
// //import ResultTitleDisplay from './ResultTitleDisplay.jsx';
// import ResultEventDisplay from './ResultEventDisplay.jsx';
// import ResultDescriptionDisplay from './ResultDescriptionDisplay.jsx';
// import ResultLocationDisplay from './ResultLocationDisplay.jsx';



const ResultMainContainer = props =>{
  const {img, title, eventInfo, eventDescription, eventLocation} = props.eventObj;

      return(
        <div className="result-container">
            {/* <ResultImageDisplay/> */}
          <div className="eventImageBox" id="eventImage">
            <div className="innerbox">
              <label htmlFor="eventImage">Image here: </label>
              <p>
                <span id="eventImage">{img}</span>
              </p>
            </div>
          </div>
            {/* <ResultTitleDisplay/> */}
          <div className="eventTitleBox" id="eventTitle">
            <div className="innerbox">
              <label htmlFor="eventTitle">Title box here: </label>
              <p>
                <span id="eventTitle">{title}</span>
              </p>
            </div>
          </div>
            {/* <ResultEventDisplay/> */}
          <div className="eventInfoBox" id="eventInfo">
            <div className="innerbox">
              <label htmlFor="eventInfo">EventInfo here: </label>
              <p>
                <span id="eventInfo">{eventInfo}</span>
              </p>
            </div>
          </div>
        {/* <ResultDescriptionDisplay/> */}
          <div className="eventDescriptionBox" id="eventDescription">
            <div className="innerbox">
              <label htmlFor="eventDescription">Event Description here: </label>
              <p>
                <span id="eventDescription">{eventDescription}</span>
              </p>
            </div>
          </div>
        {/* ResultLocationDisplay */}
            <div className="eventLocationBox" id="eventLocation">
              <div className="innerbox">
                <label htmlFor="eventLocation">Location box here: </label>
                <p>
                  <span id="eventLocation">{eventLocation}</span>
                </p>
              </div>
            </div>
          </div>
      );
    }


export default ResultMainContainer;
// export default connect(mapStateToProps, null)(ResultMainContainer);
import React, { Component } from 'react';
import { render } from 'react-dom';
// import ResultImageDisplay from './ResultImageDisplay.jsx';
// //import ResultTitleDisplay from './ResultTitleDisplay.jsx';
// import ResultEventDisplay from './ResultEventDisplay.jsx';
// import ResultDescriptionDisplay from './ResultDescriptionDisplay.jsx';
// import ResultLocationDisplay from './ResultLocationDisplay.jsx';



const ResultMainContainer = props =>{
  const {image_url, name, start_date, start_time, venue, city, tm_url, country} = props.eventObj;

      return(
        <div className="result-container">
            {/* <ResultImageDisplay/> */}
          <div className="eventImageBox" id="eventImage">
            <div className="innerbox">
              <p>
                <span id="eventImageSpan"><img className="eventImage" src={image_url} /></span>
              </p>
            </div>
          </div>
            {/* <ResultTitleDisplay/> */}
          <div className="eventTitleBox" id="eventTitle">
            <div className="innerbox">
              <label htmlFor="eventTitle"></label>
              <p>
                <span id="eventTitle">{name}</span>
              </p>
            </div>
          </div>
            {/* <ResultEventDisplay/> */}
          <div className="eventInfoBox" id="eventInfo">
            <div className="innerbox">
              <label htmlFor="eventInfo"></label>
              <p>
                <span id="eventInfo">Date: {start_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start Time: {start_time} </span>
              </p>
            </div>
          </div>
        {/* <ResultDescriptionDisplay/> */}
          <div className="eventDescriptionBox" id="eventDescription">
            <div className="innerbox">
              <label htmlFor="eventDescription"></label>
              <p>
                <span id="eventDescription"><a href={tm_url}>Here</a>&nbsp;for More Information and to Buy Tickets</span>
              </p>
            </div>
          </div>
        {/* ResultLocationDisplay */}
            <div className="eventLocationBox" id="eventLocation">
              <div className="innerbox">
                <label htmlFor="eventLocation">Location: </label>
                <p>
                  <span id="eventLocation">{venue}, {city}, {country}</span>
                </p>
              </div>
            </div>
          </div>
      );
    }


export default ResultMainContainer;
// export default connect(mapStateToProps, null)(ResultMainContainer);
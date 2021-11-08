import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultDescriptionDisplay = props => (
  <div className="eventDescriptionBox" id="eventDescription">
    <div className="innerbox">
      <label htmlFor="eventDescription">Event Description here: </label>
      <p>
        <span id="eventDescription">{props.eventDescription}</span>
      </p>
    </div>
  </div>
)

// export default connect(mapStateToProps, null)(ResultImageDisplay);
export default ResultDescriptionDisplay;


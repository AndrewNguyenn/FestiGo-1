import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultImageDisplay = props => (
  <div className="eventImageBox" id="eventImage">
    <div className="innerbox">
      <label htmlFor="eventImage">Image here: </label>
      <p>
        <span id="eventImage">{props.eventDescription}</span>
      </p>
    </div>
  </div>
)

// export default connect(mapStateToProps, null)(ResultImageDisplay);
export default ResultImageDisplay;


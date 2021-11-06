import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultDescriptionDisplay = props => (
  <div className="eventDescriptionBox" id="eventDescription">
    <label htmlFor="eventDescription">Description here: </label>
  </div>
)

// export default connect(mapStateToProps, null)(ResultImageDisplay);
export default ResultDescriptionDisplay;


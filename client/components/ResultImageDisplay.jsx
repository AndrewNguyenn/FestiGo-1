import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultImageDisplay = props => (
  <div className="eventImageBox" id="eventImage">
    <label htmlFor="eventImage">Image here: </label>
  </div>
)

// export default connect(mapStateToProps, null)(ResultImageDisplay);
export default ResultImageDisplay;


import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultEventDisplay = props => (
  <div className="eventInfoBox" id="eventInfo">
    <div className="innerbox">
      <label htmlFor="eventInfo">EventInfo here: </label>
      <p>
        <span id="eventInfo">{props.eventInfo}</span>
      </p>
    </div>
  </div>

)

// export default connect(mapStateToProps, null)(ResultEventDisplay);
export default ResultEventDisplay;


import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultLocationDisplay = props => (
  <div className="eventLocationBox" id="eventLocation">
    <div className="innerbox">
      <label htmlFor="eventLocation">Location box here: </label>
      <p>
        <span id="eventLocation">{props.eventLocation}</span>
      </p>
    </div>
  </div>

)

// export default connect(mapStateToProps, null)(ResultLocationDisplay);
export default ResultLocationDisplay;

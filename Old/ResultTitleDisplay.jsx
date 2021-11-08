import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import { connect } from 'react-redux';

const ResultTitleDisplay = props => (
  <div className="eventTitleBox" id="eventTitle">
    <div className="innerbox">
      <label htmlFor="eventTitle">Title box here: </label>
      <p>
        <span id="eventTitle">{props.eventTitle}</span>
      </p>
    </div>
  </div>


)

// export default connect(mapStateToProps, null)(ResultTitleDisplay);
export default ResultTitleDisplay;

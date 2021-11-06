import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer';
import { connect } from 'react-redux';

const ResultEventDisplay = props => {
  <div className="eventInfoBox" id="eventInfo">
    <label htmlFor="eventInfo">EventInfo here: </label>
  </div>
}

export default connect(mapStateToProps, null)(ResultEventDisplay);

import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer';
import { connect } from 'react-redux';

const ResultLocationDisplay = props => {
  <div className="eventLocationBox" id="eventLocation">
    <label htmlFor="eventLocation">Location box here: </label>
  </div>
}

export default connect(mapStateToProps, null)(ResultLocationDisplay);

import React from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer';
import { connect } from 'react-redux';

const ResultTitleDisplay = props => {
  <div className="eventTitleBox" id="eventTitle">
    <label htmlFor="eventTitle">Title box here: </label>
  </div>
}

export default connect(mapStateToProps, null)(ResultTitleDisplay);

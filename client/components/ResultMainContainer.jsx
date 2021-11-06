import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import ResultImageDisplay from './ResultImageDisplay';
import ResultTitleDisplay from './ResultTitleDisplay';
import ResultEventDisplay from './ResultEventDisplay';
import ResultLocationDisplay from './ResultLocationDisplay';


const mapStateToProps = state => ({
  // add pertinent state here
});

class ResultMainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="result-container">
        <div className="outerBox">
          <h1 id="header">Result #1</h1>
          <ResultImageDisplay/>
          <ResultTitleDisplay/>
          <ResultEventDisplay/>
          <ResultLocationDisplay/>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(ResultMainContainer);
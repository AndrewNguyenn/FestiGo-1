import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import ResultImageDisplay from './ResultImageDisplay.jsx';
import ResultTitleDisplay from './ResultTitleDisplay.jsx';
import ResultEventDisplay from './ResultEventDisplay.jsx';
import ResultLocationDisplay from './ResultLocationDisplay.jsx';



class ResultMainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  // mapStateToProps = state => ({
  //   // add pertinent state here
  // });
  render() {
    return(
      <div className="result-container">
        <div className="outerBox">
          <ResultImageDisplay/>
          <ResultTitleDisplay/>
          <ResultEventDisplay/>
          <ResultLocationDisplay/>
        </div>
      </div>
    );
  }

}

export default ResultMainContainer;
// export default connect(mapStateToProps, null)(ResultMainContainer);
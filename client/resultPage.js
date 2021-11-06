import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ResultMainContainer from './components/ResultMainContainer.jsx'
// import store from './store';

// so webpack can use SCSS
import styles from './scss/resultPage.scss';

// wrap the App in the Provider Component and pass in the store
// render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ResultMainContainer />
//     </Provider>,
//   </React.StrictMode>,
//   document.querySelector('#contents')
// );
render (
  <ResultMainContainer/>,
  document.getElementById("contents")
);
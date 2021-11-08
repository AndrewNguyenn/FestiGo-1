import React, { Component } from 'react';
import { render } from 'react-dom';
import ResultMainContainer from './ResultMainContainer.jsx';
import App from '../App.jsx'

const testResults = [
    {
        name: 'Steel Panther - Heavy Metal Rules Tour',
        start_date: '2023-08-30',
        start_time: '20:00:00',
        venue: 'House of Blues New Orleans ',
        city: 'New Orleans',
        event_id: 'G5viZpc_x1obG',
        image_url: 'https://s1.ticketm.net/dam/a/50a/70e6baa5-5f7d-4d7e-8270-bd4e391af50a_1470381_TABLET_LANDSCAPE_3_2.jpg',
        tm_url: 'https://concerts.livenation.com/steel-panther-heavy-metal-rules-tour-new-orleans-louisiana-08-30-2023/event/1B005AD66229160C',
        country: 'United States Of America',
        datedays: 8635
    },
    {
      name: 'Flavour',
      start_date: '2023-09-01',
      start_time: '20:00:00',
      venue: 'The Fillmore Silver Spring',
      city: 'Silver Spring',
      event_id: 'G5viZpc_x1obG',
      image_url: 'https://s1.ticketm.net/dam/a/76a/4a1fea51-a0cb-4144-bea7-4e227f54276a_1486971_TABLET_LANDSCAPE_3_2.jpg',
      tm_url: 'https://concerts.livenation.com/flavour-silver-spring-maryland-09-01-2023/event/15005B04B3413215',
      country: 'United States Of America',
      datedays: 8635
    },
    {
        name: 'Colter Wall',
        start_date: '2023-09-08',
        start_time: '19:00:00',
        venue: 'Newport Music Hall',
        city: 'Columbus',
        event_id: 'vvG1fZpckNIxMV',
        image_url: 'https://s1.ticketm.net/dam/a/bbe/1bfeea9a-dfc4-4e6f-8dc7-4dfa70297bbe_1458611_TABLET_LANDSCAPE_3_2.jpg',
        tm_url: 'https://www.ticketmaster.com/colter-wall-columbus-ohio-09-08-2023/event/05005AD1A3A22DF4',
        country: 'United States Of America',
        datedays: 8643
    },
]

const ResultsDisplay = props => {

  const {results} = props;
  const resultsToDisplay = results.map((event, idx) => {
      return <ResultMainContainer eventObj ={event} key ={idx}/>
  });
    return(
        <div class="landingPage">
            <div class="displayPage">
              {resultsToDisplay}
            </div>
        </div>
    );
}

export default ResultsDisplay;
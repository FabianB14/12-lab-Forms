import React from 'react';

function Results(props) {
  return (
    <React.Fragment>
      <section>
        <h3>Results from the Dark Sky AP</h3>
        <ul>
          <li>Partly cloudy</li>
        </ul>
      </section>
      <section>
        <h3>Results from the Yelp API</h3>
        <ul>
          <li>Cloudy Reviews</li>
        </ul>
      </section>
      <section>
        <h3>Results from the Eventbrite </h3>
        <ul>
          <li>Partly interesting</li>
        </ul>
      </section>
      <section>
        <h3>Results from The Movie DB API</h3>
        <ul>
          <li>Partly cloudy movie</li>
        </ul>
      </section>
      <section>
        <h3>Results from the Hiking Project API</h3>
        <ul>
          <li>Movie Hike</li>
        </ul>
      </section>
      </React.Fragment>
  )
}

export default Results;
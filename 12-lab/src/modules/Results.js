import React from 'react';

function Results(props) {
  return (
    <React.Fragment>
      <div class="column-container">
      <section>
        <h3>Results from the Dark Sky AP</h3>
        <ul>
          <li>Partly cloudy</li>
        </ul>
      </section>
      <section>
        <h3>Results from the Yelp API</h3>
        <ul>
        <li><a href=""></a>
          <p></p>
          <p></p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Results from the Eventbrite </h3>
        <ul>
          <li><a href=""></a>
          <p></p>
          <img src=""></img></li>
        </ul>
      </section>
      <section>
        <h3>Results from The Movie DB API</h3>
        <ul>
        <li><p><span></span></p>
          <img src=""></img>
          <p></p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Results from the Hiking Project API</h3>
        <ul>
          <li>
        <p><a href=""></a></p>
        <p></p>
        <p></p>
        <p></p>
        </li>
        </ul>
      </section>
      </div>
      </React.Fragment>
  )
}

export default Results;
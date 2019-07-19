import React from 'react';

function Map(props) {
  return (
    <div>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyB9xDbZ44YCk37fQ3SZxQe7ERqXKki8XE4" alt=""></img>
      <section class="error-container"></section>
    </div>
  )
}

export default Map;
import React from 'react';
import Search from './Search.js';
import Map from './Map.js';
import Results from './Results.js';


function Main(props) {
  return (
    <main>
     <Search />
     <Map />
     <Results />
    </main>
  )
}

export default Main;
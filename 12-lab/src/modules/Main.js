import React from 'react';
import Search from './Search.js';
import Map from './Map.js';
import SearchResults from './SearchResults.js';


function Main(props) {
  return (
    <main>
     <Search />
     <Map />
     <SearchResults />
    </main>
  )
}


export default Main;
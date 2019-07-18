import React from 'react';
import Routing from './Router.js'

function Search(props) {
  return (
    <form>
      <input></input>
    <button onClick={props.handleClick}>Explore</button>
    </form>
  )
}

export default Search;
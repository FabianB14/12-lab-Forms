import React from 'react';
import Routing from './Router.js'

function Search(props) {
  return (
    <form>
      <input></input>
    <button onClick={props.getApiKey}>Explore</button>
    </form>
  )
}

let getApiKey = (value) => {
  this.setState({STATIC_MAP_API_KEY: value})
}
export default Search;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require('dotenv').config();



function Routing(props){
  return(
    <Router>
    {/* <Route exact path="/" component={Home} /> */}
    <Route path="/location" component={Location} />
    {/* <Route path="/weather" component={Weather} /> */}
    </Router>
  )

}


function Location (){
  return(
    <h1>Location route</h1>
  )
}
function Home (){
  return(
    <h1>Home route</h1>
  )
}
function Weather (){
  return(
    <h1>Weather route</h1>
  )
}

export default Routing




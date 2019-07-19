import React from 'react';
import './scss/core.scss';
import Header from './Header.js'
import Main from './Main.js'
import Routing from './Router.js'
import {BrowserRouter} from 'react-router-dom';
 

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backendUrl: '',
      googleResults: {},
      apiResults: {
        weather : [],
        yelp : [],
        events: [],
        movies : []
      }
    }
  }
  render(){
    return(
      <BrowserRouter>
        <Header />
        <Main />
        <Routing />
      </BrowserRouter>
    )
  }
}



export default App;

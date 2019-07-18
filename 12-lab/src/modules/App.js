import React from 'react';
import '../App.css';
import Header from './Header.js'
import Main from './Main.js'
import Routing from './Router.js'
import {BrowserRouter} from 'react-router-dom';
 

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      results: []
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

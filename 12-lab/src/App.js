import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      results: []
    }
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Main />
        

      </React.Fragment>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header(props) {
  return (
    <header>
      <h1>City Exploer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  )
}
function Main(props) {
  return (
    <main>
     <Search />
     <Map />
     <Results />
    </main>
  )
}

function Search(props) {
  return (
    <form>
      <input></input>
      <button >Submit</button>
    </form>
  )
}
function Map(props) {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Maps.me_screenshot_7.0.5.png/450px-Maps.me_screenshot_7.0.5.png" alt=""></img>
    </div>
   
  )
}
function Results(props) {
  return (
    <React.Fragment>
      <section>
        <h3>Weather Results</h3>
      </section>
      </React.Fragment>
  )
}

export default App;

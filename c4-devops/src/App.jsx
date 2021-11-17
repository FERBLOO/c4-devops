//vendors
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


//Styles
import './App.scss';

//views
import Home from './home/home.view';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" exact>
          <Home />
          </Route>
          </Routes>
          </Router>


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

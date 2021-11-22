import Nav from './components/nav';
import SearchBar from './components/search-bar';
import ExploreCategories from './components/explore-categories';
import Restaurants from './components/restaurants';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="Ap">
      <Nav/>
      <SearchBar/>
      <ExploreCategories/>
      <Restaurants/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
              http://restaurant-env.eba-ami6wnm7.us-east-2.elasticbeanstalk.com/

        </a>
      </header> */}
    </div>
    </Router>
  );
}

export default App;

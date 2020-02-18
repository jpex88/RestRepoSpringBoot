import React from 'react'
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Common/components/Navbar";
import MovieSearch from './MovieSearch/MovieSearch';
import PostMovie from './PostMovie/PostMovie';
/*import DeleteMovie from "./DeleteMovie/DeleteMovie";*/

function App() {
  return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={MovieSearch} />
        {/*<Route exact path='/' component={DeleteMovie} />*/}
        <Route exact path='/' component={PostMovie} />
      </div>
  );
}

export default App;

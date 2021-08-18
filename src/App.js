import React from 'react';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      {/* // <Route path='/artists' component={ArtistList} />
      // <Route path='/doni' component={Artist} /> */}
    </Switch>
  </Router>
  );
}

export default App;

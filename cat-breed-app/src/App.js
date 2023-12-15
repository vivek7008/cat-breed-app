
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedDetail from './BreedDetail';
import BreedList from './BreedList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/breeds/:breedId">
          <BreedDetail />
        </Route>
        <Route path="/">
          <BreedList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

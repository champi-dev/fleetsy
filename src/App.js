import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;

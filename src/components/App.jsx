import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Champions from './Champions';
import Forum from './Forum';

function App() {
  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/champions" component={Champions} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </div>
    </div>
  );
}


export default App;

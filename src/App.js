import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/recolector'  />
        <Route exact path='/usuario'  />
        <Route exact path='' />
      </Switch>
    </Router>
  );
}

export default App;

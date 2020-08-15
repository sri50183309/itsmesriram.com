import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         Me component
        </Route>
        <Route path="/projects">
          Project Component
        </Route>
        <Route path="/work">
          Work component
        </Route>
        <Route path="/education">
          Eductaion component
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
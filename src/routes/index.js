import React from 'react';
import {Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';

import NotFound from '../components/not-found';
import Home from '../components/home';
import Authentication from '../components/auth';

export default () => (
  <div className="routes">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={ () => <Redirect push to="/home"/> } />
          <Route path="/home" component={Home} />
          <Route path="/authentication" component={Authentication} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

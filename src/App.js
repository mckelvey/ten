import React from 'react';
import { Head, Router, Route, Switch } from 'react-static';
import universal from 'react-universal-component';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import './App.scss';

const Day = universal(import('./pages/Day'));

const App = () => (
  <Router>
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500|Zilla+Slab:500,700&amp;subset=latin-ext" rel="stylesheet" />
      </Head>
      <Switch>
        <Route path="/day/:date" component={Day} />
        <Routes />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(App);

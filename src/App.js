import React from 'react';
import { Head, Router, Link, Route, Switch } from 'react-static';
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
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/day/2008-12-06">Day</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/day/:date" component={Day} />
          <Routes />
        </Switch>
      </main>
      <footer>
        <p>
          <a href="https://sitesmade4people.co">Sites Made for People</a>
        </p>
      </footer>
    </div>
  </Router>
);

export default hot(module)(App);

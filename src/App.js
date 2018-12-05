import shuffle from 'lodash/shuffle';
import React from 'react';
import { Head, Router, Route, Switch } from 'react-static';
import universal from 'react-universal-component';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import './App.scss';

const Day = universal(import('./pages/Day'));

const randomInteger = maximum =>
  Math.floor(Math.random() * Math.floor(maximum));

const colors = shuffle([
  'yellow',
  'orange',
  'teal',
  'blue',
]);

const setProperty = (property, value) =>
  document.documentElement.style.setProperty(property, value);

class App extends React.PureComponent {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      setProperty('--angle-primary-gradient', `${randomInteger(359)}deg`);
      setProperty('--angle-secondary-gradient', `${randomInteger(359)}deg`);
      setProperty('--color-primary', `var(--color-${colors[0]})`);
      setProperty('--color-primary-medium', `var(--color-${colors[0]}-medium)`);
      setProperty('--color-primary-pale', `var(--color-${colors[0]}-pale)`);
      setProperty('--color-primary-gradient-strong', `var(--color-${colors[1]}-strong)`);
      setProperty('--color-primary-gradient-pale', `var(--color-${colors[1]}-pale)`);
      setProperty('--color-secondary-gradient-strong', `var(--color-${colors[2]}-strong)`);
      setProperty('--color-secondary-gradient-pale', `var(--color-${colors[2]}-pale)`);
    }
  }

  render() {
    return (
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
  }
}

export default hot(module)(App);

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
            <meta charset="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>TEN : My Decade on GitHub</title>
            <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-120x120.png" sizes="120x120" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-152x152.png" sizes="152x152" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-167x167.png" sizes="167x167" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-180x180.png" sizes="180x180" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/browserconfig.xml" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500|Zilla+Slab:500,700&amp;subset=latin-ext" rel="stylesheet" />
            <meta name="keywords" content="mckelvey github git repository commit count decade ten years" />
            <meta name="twitter:title" content="TEN : My Decade on GitHub" />
            <meta property="og:title" content="TEN : My Decade on GitHub" />
            <meta name="twitter:image" content="/favicons/share.png" />
            <meta property="og:image" content="/favicons/share.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:image:alt" content="TEN : My Decade on GitHub" />
            <meta name="description" content="This is a simple and fun celebration of my decade on GitHub." />
            <meta name="twitter:description" content="This is a simple and fun celebration of my decade on GitHub." />
            <meta property="og:description" content="This is a simple and fun celebration of my decade on GitHub." />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="TEN : My Decade on GitHub" />
            <meta property="og:url" content="https://mckelvey.github.io/ten/" />
            <meta name="twitter:site" content="@mckelvey" />
            <meta name="twitter:card" content="summary_large_image" />
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

import React from 'react'
import { Router, Link, Route, Switch } from 'react-static'
import universal from 'react-universal-component'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

// Use universal-react-component for code-splitting non-static routes :)
const Day = universal(import('./containers/Day'))

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/day/2008-12-06">Day</Link>
        <Link to="/i-dont-match-any-route">Non-Matching Route</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/day/:date" component={Day} />
          <Routes />
        </Switch>
      </main>
    </div>
  </Router>
)

export default hot(module)(App)

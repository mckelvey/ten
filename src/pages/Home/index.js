import React from 'react'
import { Link, withSiteData } from 'react-static'

import { summary } from '../../store/commit-history';
import './styles.scss';

export default withSiteData(() => (
  <div className="index">
    <h1>Ten</h1>
    <p>Celebrating my decade on GitHub.</p>
    <p className="commits">{summary.commitCount} Commits</p>
    <p>This is a simple and fun celebration of my decade on GitHub. Naturally, you can fork this repo and make it your own. If you do, let me know as I’d love to see where this goes.</p>
    <p>
      <a className="name" href="mailto:david@mckelveycreative.co">David</a>
    </p>
    <p>
      <Link to="/day/2008-12-06">Begin</Link>
    </p>
  </div>
))

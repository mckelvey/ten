import React from 'react'
import { Link, withSiteData } from 'react-static'

import { summary } from '../../store/commit-history';

export default withSiteData(() => (
  <div>
    <h1>Ten</h1>
    <p>Celebrating my decade on GitHub.</p>
    {summary.commitCount}
    <Link to="/day/2008-12-06">Begin</Link>
  </div>
))

import React from 'react'
import { withSiteData } from 'react-static'

import { summary } from '../store/commit-history';

console.log(summary);

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Hello</h1>
    {summary.commitCount}
  </div>
))

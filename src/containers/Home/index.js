import React from 'react'
import { withSiteData } from 'react-static'

import { summary } from '../../store/commit-history';

export default withSiteData(() => (
  <div>
    <h1>Ten</h1>
    {summary.commitCount}
  </div>
))

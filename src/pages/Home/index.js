import React from 'react'
import { Link, withSiteData } from 'react-static'

import { summary } from '../../store/commit-history';
import Footer from '../../components/Footer';
import './styles.scss';

export default withSiteData(() => (
  <div className="index">
    <header>
      <h1>Ten</h1>
      <p>Celebrating my decade on GitHub.</p>
    </header>
    <nav>
      <Link className="begin" to="/day/2008-12-06">Begin</Link>
    </nav>
    <main>
      <p>
        <Link className="commits" to="/day/2008-12-06">{summary.commitCount} Commits</Link>
      </p>
      <p>
        This is a simple and fun celebration of my decade on GitHub. Naturally, you can fork{' '}
        <a href="https://github.com/mckelvey/ten" target="_blank" rel="noreferrer noopener">this repo</a>{' '}
        and make it your own. If you do, let me know as I’d love to see where this goes.
      </p>
      <p className="name">
        <a href="mailto:david@mckelveycreative.co">David</a>
      </p>
    </main>
    <Footer />
  </div>
))

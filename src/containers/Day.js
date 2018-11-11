import get from 'lodash/get';
import React from 'react';
import { Link } from 'react-static';

import Count from '../components/Count';
import Graph from '../components/svg/Graph';

export default (props) => {
  const date = get(props, 'match.params.date');
  if (date) {
    return (
      <div>
        <h1>Day</h1>
        <p>
          This is a non-static route! I am not statically exported, but still accessible at runtime. But
          wait, there is more...
        </p>
        <Count date={date} />
        <Graph date={date} />
        <Link to="/day/2008-12-07">Click here to load a non-static sub-route</Link>
      </div>
    );
  }
  return null;
};

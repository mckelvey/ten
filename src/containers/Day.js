import get from 'lodash/get';
import React from 'react';
import { Link } from 'react-static';

import { next } from '../store/commit-history';
import Count from '../components/Count';
import Graph from '../components/svg/Graph';

export default (props) => {
  const date = get(props, 'match.params.date');
  const nextDay = next(date);
  if (date) {
    return (
      <div>
        <h1>Day</h1>
        <Count date={date} />
        <Graph date={date} />
        <Link to={`/day/${nextDay}`}>{nextDay}</Link>
      </div>
    );
  }
  return null;
};

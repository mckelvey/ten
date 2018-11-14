import get from 'lodash/get';
import React from 'react';

import Count from '../../components/Count';
import Graph from '../../components/svg/Graph';
import './styles.scss';

export default (props) => {
  const date = get(props, 'match.params.date');
  if (date) {
    return (
      <div>
        <h1>Day</h1>
        <Count date={date} />
        <Graph date={date} />
      </div>
    );
  }
  return null;
};

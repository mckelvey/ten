import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';

import { day, series, summary } from '../../store/commit-history';

class Graph extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleGrab = this.handleGrab.bind(this);
  }

  handleGrab() {
    //
  }

  renderCommit(currentDate, date, index) {
    const { height } = this.props;
    const { count } = day(date);
    if (typeof count === 'number') {
      const barHeight =
        height - (count / summary.maxCommitsPerDay * (height - 1)) - 1;
      return (
        <path
          d={`M ${index},${height - 1} L ${index},${barHeight} Z`}
          fill="none"
          key={date}
          stroke="rebeccapurple"
          style={{ opacity: currentDate === date ? 1 : 0.25 }}
        />
      );
    }
    return null;
  }

  render() {
    const { date: currentDate, height } = this.props;
    return (
      <svg
        viewBox={`0 0 ${summary.dayCount} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d={`M 0,${height - 1} L ${summary.dayCount},${height - 1} Z`}
            fill="none"
            stroke="rebeccapurple"
          />
        </g>
        <g>
          {map(series, (date, index) => this.renderCommit(currentDate, date, index))}
        </g>
      </svg>
    );
  }

}

Graph.propTypes = {
  height: PropTypes.number,
};

Graph.defaultProps = {
  height: 300,
};

export default Graph;

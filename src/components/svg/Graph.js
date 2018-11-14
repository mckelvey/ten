import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';

import { currentIndex, day, series, summary } from '../../store/commit-history';
import './Graph.scss';

class Graph extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleGrab = this.handleGrab.bind(this);
  }

  handleGrab() {
    //
  }

  renderCommit(currentDate, date, index) {
    const { barWidth, height } = this.props;
    const { count } = day(date);
    if (typeof count === 'number') {
      const y =
        height - (count / summary.maxCommitsPerDay * (height - 1)) - 1;
      return (
        <rect
          className={currentDate === date ? 'current' : ''}
          fill="rebeccapurple"
          height={height - y}
          key={date}
          width={barWidth}
          x={index * barWidth}
          y={y}
        />
      );
    }
    return null;
  }

  render() {
    const { barWidth, date: currentDate, height } = this.props;
    const left = currentIndex(currentDate) / summary.dayCount * -100;
    return (
      <svg
        viewBox={`0 0 ${summary.dayCount * barWidth} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateX(${left}%)` }}
      >
        <g>
          {map(series, (date, index) => this.renderCommit(currentDate, date, index))}
        </g>
      </svg>
    );
  }

}

Graph.propTypes = {
  barWidth: PropTypes.number,
  height: PropTypes.number,
};

Graph.defaultProps = {
  barWidth: 50,
  height: 300,
};

export default Graph;

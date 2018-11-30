import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-static';

import { currentIndex, day, series, summary } from '../../store/commit-history';
import './styles.scss';

class Graph extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleGrab = this.handleGrab.bind(this);
  }

  componentDidMount() {
    this.scrollToDate();
  }

  componentDidUpdate() {
    this.scrollToDate();
  }

  scrollToDate() {
    if (this.root) {
      const { barWidth, date: currentDate } = this.props;
      this.root.scrollLeft = currentIndex(currentDate) * barWidth;
    }
  }

  handleGrab() {
    //
  }

  handleClick(event) {
    event.preventDefault();
    const date = event.currentTarget.getAttribute('data-date');
    if (date) {
      this.props.history.push(`/day/${date}`);
    }
  }

  renderCommit(currentDate, date, index) {
    const { barWidth, height } = this.props;
    const { count } = day(date);
    if (typeof count === 'number') {
      let barHeight = 0;
      if (count <= 10) {
        barHeight = height / 2 / 10 * count;
      } else if (count <= 100) {
        barHeight = height / 16 * 5 / 90 * (count - 10) + (height / 2);
      } else { // less than 1000
        barHeight = height / 16 * 3 / 900 * (count - 100) + (height / 16 * 13);
      }
      const y = height - barHeight;
      return (
        <rect
          className={currentDate === date ? 'current' : ''}
          data-date={date}
          fill="rebeccapurple"
          height={height - y}
          key={date}
          onClick={this.handleClick}
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
      <div
        id="graph-container"
        ref={node => { this.root = node; }}
      >
        <svg
          viewBox={`0 0 ${summary.dayCount * barWidth} ${height + barWidth}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateX(${left}%)` }}
        >
          <g>
            {map(series, (date, index) => this.renderCommit(currentDate, date, index))}
          </g>
          <path d={`M 0,${height} L ${summary.dayCount * barWidth},${height} Z`} />
          <rect
            fill="rebeccapurple"
            height={barWidth}
            style={{ opacity: 1 }}
            width={barWidth}
            x={currentIndex(currentDate) * barWidth}
            y={height}
          />
        </svg>
      </div>
    );
  }

}

Graph.propTypes = {
  barWidth: PropTypes.number,
  height: PropTypes.number,
};

Graph.defaultProps = {
  barWidth: 3,
  height: 300,
};

export default withRouter(Graph);

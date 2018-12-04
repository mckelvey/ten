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

  handleClick(event) {
    event.preventDefault();
    const date = event.currentTarget.getAttribute('data-date');
    if (date) {
      this.props.history.push(`/day/${date}`);
    }
  }

  renderCommit(currentIndex, date, index) {
    const { barWidth, breakpoints, divisor, height, segments } = this.props;
    const { count } = day(date);
    if (typeof count === 'number') {
      let barHeight = 0;
      if (count <= breakpoints.one) {
        barHeight =
          height / divisor * segments.one / breakpoints.one * count;
      } else if (count <= breakpoints.two) {
        barHeight =
          height / divisor * segments.two / (breakpoints.two - breakpoints.one) *
          (count - breakpoints.one) + (height / divisor * segments.one);
      } else { // less than breakpoints.three
        barHeight =
          height / divisor * segments.three / (breakpoints.three - breakpoints.two) *
          (count - breakpoints.two) + (height / divisor * (segments.one + segments.two));
      }
      const y = height - barHeight;
      return (
        <rect
          className={currentIndex === index ? 'current' : ''}
          data-date={date}
          height={height - y}
          key={date}
          onClick={this.handleClick}
          title={`${date}: ${count} commits`}
          width={barWidth}
          x={index * barWidth}
          y={y}
        />
      );
    }
    return null;
  }

  render() {
    const { barWidth, currentIndex, divisor, height, segments } = this.props;
    const left = currentIndex / summary.dayCount * -100;
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
          <g className="axes">
            <path
              className="base"
              d={`M 0,${height} L ${summary.dayCount * barWidth},${height} Z`}
            />
            <path
              d={
                `M 0,${
                  height / divisor * segments.one
                } L ${summary.dayCount * barWidth},${
                  height / divisor * segments.one
                } Z`
              }
            />
            <path
              d={
                `M 0,${
                  height / divisor * (segments.one + segments.two)
                } L ${summary.dayCount * barWidth},${
                  height / divisor * (segments.one + segments.two)
                } Z`
              }
            />
          </g>
          <g className="bars">
            {map(series, (date, index) => this.renderCommit(currentIndex, date, index))}
          </g>
          <rect
            className="marker"
            height={barWidth}
            style={{ opacity: 1 }}
            width={barWidth}
            x={currentIndex * barWidth}
            y={height}
          />
        </svg>
      </div>
    );
  }

}

Graph.propTypes = {
  barWidth: PropTypes.number,
  breakpoints: PropTypes.shape({
    one: PropTypes.number.isRequired,
    two: PropTypes.number.isRequired,
    three: PropTypes.number.isRequired,
  }),
  currentIndex: PropTypes.number.isRequired,
  divisor: PropTypes.number,
  height: PropTypes.number,
  segments: PropTypes.shape({
    one: PropTypes.number.isRequired,
    two: PropTypes.number.isRequired,
    three: PropTypes.number.isRequired,
  }),
};

Graph.defaultProps = {
  barWidth: 3,
  breakpoints: {
    one: 30,
    two: 100,
    three: 1000,
  },
  height: 300,
  divisor: 15,
  segments: {
    one: 5,
    two: 5,
    three: 5,
  },
};

export default withRouter(Graph);

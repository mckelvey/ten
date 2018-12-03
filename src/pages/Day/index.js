import get from 'lodash/get';
import React from 'react';
import { withRouter } from 'react-static';

import Count from '../../components/Count';
import Graph from '../../components/Graph';
import { currentIndex, day, series, summary } from '../../store/commit-history';
import './styles.scss';

const getIndex = props => {
  const date = get(props, 'match.params.date');
  return currentIndex(date);
};

class Day extends React.PureComponent {
  constructor(props) {
    super(props);
    const index = getIndex(props);
    this.delay = null;
    this.state = { index };
  }

  componentDidMount() {
    this.next();
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.delay);
    const index = getIndex(nextProps);
    if (index && index !== this.state.index) {
      this.setState({ index });
    }
  }

  componentDidUpdate() {
    this.next();
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  next() {
    this.delay = setTimeout(
      () => {
        const { index } = this.state;
        if (index < summary.dayCount - 1) {
          this.setState({ index: index + 1 });
        }
      },
      1
    );
  }

  render() {
    const date = get(this.props, 'match.params.date');
    const { index } =  this.state;
    const counts = day(series[index]);
    if (date) {
      return (
        <div className="day">
          <h1>
            <span className="title">Day</span>
            <Count
              count={index + 1}
              term="day"
              total={summary.dayCount}
            />
          </h1>
          <Graph date={date} currentIndex={index} />
          {counts &&
            <Count
              count={counts.totalToDate}
              term="commits"
              total={summary.commitCount}
            />
          }
        </div>
      );
    }
    return null;
  }
}

export default withRouter(Day);

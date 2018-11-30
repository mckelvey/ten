import delay from 'lodash/delay';
import get from 'lodash/get';
import React from 'react';
import { withRouter } from 'react-static';

import Count from '../../components/Count';
import Graph from '../../components/Graph';
import { currentIndex, day, next, summary } from '../../store/commit-history';
import './styles.scss';

class Day extends React.PureComponent {
  componentDidMount() {
    this.next();
  }

  componentDidUpdate() {
    this.next();
  }

  next() {
    delay(
      () => {
        const date = get(this.props, 'match.params.date');
        this.props.history.push(`/day/${next(date)}`);
      },
      89
    );
  }

  render() {
    const date = get(this.props, 'match.params.date');
    const counts = day(date);
    if (date) {
      return (
        <div className="day">
          <h1>
            <span className="title">Day</span>
            <Count
              count={currentIndex(date) + 1}
              term="day"
              total={summary.dayCount}
            />
          </h1>
          <Graph date={date} />
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

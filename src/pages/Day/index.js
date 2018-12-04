import get from 'lodash/get';
import React from 'react';
import { Link, withRouter } from 'react-static';

import { currentIndex, day, series, summary } from '../../store/commit-history';
import Count from '../../components/Count';
import Graph from '../../components/Graph';
import Footer from '../../components/Footer';
import './styles.scss';

const initialState = props => {
  const date = get(props, 'match.params.date');
  const index = currentIndex(date);
  return {
    index,
    playing: index === 0,
  };
};

class Day extends React.PureComponent {
  constructor(props) {
    super(props);
    this.delay = null;
    this.state = initialState(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  componentDidMount() {
    this.next();
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.delay);
    this.setState(initialState(nextProps));
  }

  componentDidUpdate() {
    this.next();
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  next() {
    const { playing } = this.state;
    if (!playing) {
      clearTimeout(this.delay);
      return;
    }
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

  handlePlayClick(event) {
    event.preventDefault();
    this.setState({ playing: true });
  }

  render() {
    const date = get(this.props, 'match.params.date');
    const { index, playing } =  this.state;
    const counts = day(series[index]);
    if (date) {
      return (
        <div className="day">
          <header>
            <h1>
              <span className="title">Day</span>
              <Count
                count={index + 1}
                term="day"
                total={summary.dayCount}
              />
            </h1>
          </header>
          <nav>
            <Link className="home" exact to="/">Home</Link>
            <Link className="restart" to="/day/2008-12-06">Day</Link>
            {playing && (
              <Link className="pause" to={`/day/${series[index]}`}>Day</Link>
            )}
            {!playing && (
              <button
                className="play"
                onClick={this.handlePlayClick}
                type="button"
              >
                play
              </button>
            )}
          </nav>
          <main>
            <Graph date={date} currentIndex={index} />
            {counts &&
              <Count
                count={counts.totalToDate}
                term="commits"
                total={summary.commitCount}
              />
            }
          </main>
          <Footer />
        </div>
      );
    }
    return null;
  }
}

export default withRouter(Day);

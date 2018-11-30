import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Count = ({ count, term, total }) => (
  <div data-term={term}>
    <span data-term="count">{count}</span>
    <span data-term="total">{total}</span>
  </div>
);

Count.propTypes = {
  count: PropTypes.number.isRequired,
  term: PropTypes.string,
  total: PropTypes.number.isRequired,
};

Count.defaultProps = {
  term: '',
};

export default Count;

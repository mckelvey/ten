import React from 'react';
import PropTypes from 'prop-types';

import { day } from '../store/commit-history';

const Count = ({ date }) => {
  const counts = day(date);
  if (counts) {
    return (
      <div>
        <span className="count">{counts.count}</span>
        <span className="total-to-date">{counts.totalToDate}</span>
      </div>
    );
  }
  return null;
};

Count.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Count;

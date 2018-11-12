import get from 'lodash/get';
import sortedIndexOf from 'lodash/sortedIndexOf';
import data from '../../data/commit-history.json';

export const history = get(data, 'history');

export const series = get(data, 'series');

export const summary = get(data, 'summary');

export const day = (dateString) => get(history, dateString);

export const previous = (dateString) => {
  const index = sortedIndexOf(series, dateString);
  if (index > 0) {
    return series[index - 1];
  }
  return dateString;
};

export const next = (dateString) => {
  const index = sortedIndexOf(series, dateString);
  if (index >= 0 && index < series.length - 1) {
    return series[index + 1];
  }
  return dateString;
};

export default {
  day,
  history,
  next,
  previous,
  series,
  summary,
};

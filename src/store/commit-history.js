import get from 'lodash/get';
import data from '../../data/commit-history.json';

export const day = (dateString) => get(data, `history.${dateString}`);

export const series = get(data, 'series');

export const summary = get(data, 'summary');

export default {
  day,
  series,
  summary,
};

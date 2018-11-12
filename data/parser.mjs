import { basename, dirname } from 'path';
import { readdir, readFile, writeFile } from 'fs';
import _ from 'lodash';
import parser from 'fast-xml-parser';

const __dirname = dirname(new URL(import.meta.url).pathname);
const svgFolder = `${__dirname}/svg`;
const jsonFolder = `${__dirname}`;

const dateInRange = (dateString, yearMatcher) => {
  if (!dateString) {
    return false;
  }
  const [year, month, day] = dateString.split('-');
  if (!yearMatcher.test(dateString)) {
    return false;
  }
  if (year === '2008') {
    if (month !== '12' || parseInt(day, 10) < 6) {
      return false;
    }
  }
  return true;
};

const collectData = (jsObject, yearMatcher) => _.reduce(
  jsObject.svg.g.g,
  (result, g) => {
    if (g.rect) {
      _.forEach(g.rect, rect => {
        if (dateInRange(rect['data-date'], yearMatcher)) {
          result.push({
            count: rect['data-count'],
            date: rect['data-date'],
          });
        }
      });
    }
    return result;
  },
  []
);

readdir(svgFolder, (error, items) => {
  if (error) {
    throw error;
  }
  Promise.all(
    _.map(
      items,
      filename => {
        const fileYear = basename(filename, '.svg');
        const yearMatcher = new RegExp(`^${fileYear}-`, '');
        return new Promise((resolve, reject) => {
          readFile(`${svgFolder}/${fileYear}.svg`, (error, XMLData) => {
            if (error) {
              reject(error);
            }
            const jsObject = parser.parse(
              XMLData.toString(), {
                attributeNamePrefix: '',
                ignoreAttributes: false,
              }
            );
            resolve(collectData(jsObject, yearMatcher));
          });
        });
      }
    ))
    .then(data => {
      const series = _.sortBy(_.flatten(data), 'date');
      const summary = {
        commitCount: 0,
        dayCount: 0,
        firstDate: _.head(series).date,
        lastDate: _.last(series).date,
        maxCommitsPerDay: -Infinity,
      };
      const history = _.reduce(
        series,
        (result, { count, date }) => {
          const numericCount = parseInt(count, 10);
          summary.commitCount += numericCount;
          summary.dayCount += 1;
          if (numericCount > summary.maxCommitsPerDay) {
            summary.maxCommitsPerDay = numericCount;
          }
          return {
            ...result,
            [date]: { count: numericCount, totalToDate: summary.commitCount },
          };
        },
        {}
      );
      return {
        history,
        series: _.map(series, 'date'),
        summary,
      };
    })
    .then(data => {
      writeFile(
        `${jsonFolder}/commit-history.json`,
        JSON.stringify(data),
        error => {
          if (error) {
            throw error;
          }
          console.log('SVGs parsed successfully.');
        }
      );
    });
});

const moment = require('moment');

const compareDate = function (end_time) {
  return moment(end_time, 'YYYY-MM-DD HH-mm-ss').isAfter(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'));
};

const caculateTimeRemain = function (end_time) {
  const diffTime = moment(end_time, 'YYYY-MM-DD HH-mm-ss').diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'),'YYYY-MM-DD HH-mm-ss'));
  const duration = moment(diffTime);
  return duration.days();
};

module.exports = {
  compareDate,
  caculateTimeRemain,
};

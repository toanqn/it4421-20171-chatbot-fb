const moment = require('moment');

const compareDate = function (end_time) {
//   console.log(end_time);
//   console.log(moment().format('YYYY-MM-DD HH-mm-ss'));
//   console.log(moment().format('YYYY-MM-DD HH-mm-ss'));
  return moment(end_time, 'YYYY-MM-DD HH-mm-ss').isAfter(moment('2017-10-21 10:48:00', 'YYYY-MM-DD HH-mm-ss'));
};

module.exports = {
  compareDate,
};

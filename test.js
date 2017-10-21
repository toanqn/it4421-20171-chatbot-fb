const moment = require('moment');

// const date = moment().format('YYYY-MM-DD HH-mm-ss');

// const sT = '2017-10-21 10:48:00';

// console.log(moment('2017-10-21 10:47:00', 'YYYY-MM-DD HH-mm-ss').isBefore(moment('2017-10-21 10:48:00', 'YYYY-MM-DD HH-mm-ss')));

const dateValidate = require('./utility/dateValidate');

console.log(dateValidate.compareDate('2017-10-22 10:48:00'));

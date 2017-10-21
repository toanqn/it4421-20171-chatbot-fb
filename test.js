const moment = require('moment');

// const date = moment().format('YYYY-MM-DD HH-mm-ss');

// const sT = '2017-10-21 10:48:00';

// console.log(moment('2017-10-21 10:47:00', 'YYYY-MM-DD HH-mm-ss').isBefore(moment('2017-10-21 10:48:00', 'YYYY-MM-DD HH-mm-ss')));

console.log(moment('2017-10-21T21:00:00', 'YYYY-MM-DD HH-mm-ss').diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'), 'hours'));


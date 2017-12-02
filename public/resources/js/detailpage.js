const days = moment(end_time).diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'), 'days');
const hours = moment(end_time).diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'), 'hours');
const minutes = moment(end_time).diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'), 'minutes');
let seconds = moment(end_time).diff(moment(moment().format('YYYY-MM-DD HH-mm-ss'), 'YYYY-MM-DD HH-mm-ss'), 'seconds');

const time = document.getElementById('timeleft');

if (days > 0) {
  time.innerHTML = `${days} days left`;
} else if (hours > 0) {
  time.innerHTML = `${hours} hours left`;
} else if (minutes > 10) {
  time.innerHTML = `${minutes} minutes left`;
} else {
  time.innerHTML = `${seconds} seconds left`;
  setInterval(() => {
    seconds -= 1;
    if (seconds >= 0) {
      time.innerHTML = `${seconds} seconds left`;
    } else {
      time.innerHTML = 'Time Over !';
    }
  }, 1000);
}

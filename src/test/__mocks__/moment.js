// import moment from 'moment'; this will lead to a circle
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
}
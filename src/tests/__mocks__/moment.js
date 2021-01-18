const moment = require.requireActual("moment")

export default (TimeStamp = 0) => {
    return moment(TimeStamp);
}
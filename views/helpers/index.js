const moment = require("moment");

module.exports = {
   getDate: () => {
      return moment().format("llll");
   },
   getColumn: (obj, col) => {
      return obj.get(col);
   },
};

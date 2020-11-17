const moment = require("moment");

module.exports = {
   getDate: () => {
      return moment().format("LLLL");
   }
};
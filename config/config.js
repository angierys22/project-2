// const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
   "development": {
      "username": "root",
      "password": process.env.LOCAL_MYSQL_PASSWORD,
      "database": "workout_db",
      "host": "127.0.0.1",
      "dialect": "mysql"
   },
   "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
   },
   "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
   }

};

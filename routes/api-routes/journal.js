const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/",(req,res,next) => {
   db.Journal.findAll({})
      .then((results)=> {
         res.json(results);
      })
      .catch( (err) => {
         res.status(500);
         next(err);
      });
});

module.exports = router;

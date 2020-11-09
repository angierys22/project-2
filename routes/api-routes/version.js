const express = require("express");
const router = express.Router();
// const db = require("../../models");

// /api/commnet/create 
// post comment route -> back to index
router.get("/", (req, res) => {
   const version = { version: "0.0.1", requestURL: req.url };
   res.json(version);

});

// router.post("/create", (req, res, next) => {
//    db.Test.create(req.body)
//       .then(newComment => {
//          console.log(newComment);
//          res.redirect("/");
//          // optionally return data created
//          // res.json(newComment)
//       })
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });

module.exports = router;

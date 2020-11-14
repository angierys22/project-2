const express = require("express");
const router = express.Router();
// const db = require("../../models");

// routing (html) /commnets
router.get("/", (req, res) => {
   res.render("index");
});

router.get("/gym", (req, res) => {
   res.render("gym");
});
router.get("/JE", (req, res) => {
   res.render("JE");
});
// // get comments from db and send to template
// db.Test.findAll({})
//    .then(comments => res.render("index", { comments: comments }))
//    .catch(err => {
//       res.status(500);
//       next(err);
//    });
module.exports = router;

const express = require("express");
const { resolveConfig } = require("prettier");
const db = require("../../models");
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
router.get("/exercise/:equipment/:id", (req, res) => {
   db.Exercise.findAll({
      where:{
        muscleGroup: req.params.id, 
        equipment: req.params.equipment
      }
   })
   .then ((exercises)=>{
      let muscles= req.params.id 
      let equipment= req.params.equipment
      muscles= muscles.charAt(0).toUpperCase() + muscles.slice(1);
      equipment= equipment.charAt(0).toUpperCase() + equipment.slice(1);
      res.render("exercise", {exercises:exercises, muscleGroup:muscles, equipment:equipment});
   })
});
// // get comments from db and send to template
// db.Test.findAll({})
//    .then(comments => res.render("index", { comments: comments }))
//    .catch(err => {
//       res.status(500);
//       next(err);
//    });
module.exports = router;

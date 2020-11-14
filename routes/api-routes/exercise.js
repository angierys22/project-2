const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/",(req,res,next) => {
   db.Exercise.findAll({})
      .then((results)=> {
         res.json(results);
      })
      .catch( (err) => {
         res.status(500);
         next(err);
      });
});


//Get exercise by muscle group
router.get("/:muscleGroup",(req,res,next)=>{
   db.Exercise.findAll({
      where: {
         muscleGroup: req.params.muscleGroup,

      }
   })
      .then((results)=>{
         res.json(results);
      })
      .catch((err)=>{
         res.status(500);
         next(err);
      });
});

//Get exercise by equipment
router.get("/:equipment",(req,res,next)=>{
   db.Exercise.findAll({
      where: {
         equipment: req.params.equipment,

      }
   })
      .then((results)=>{
         res.json(results);
      })
      .catch((err)=>{
         res.status(500);
         next(err);
      });
});


//Post a new exercise
router.post("/",(req,res,next)=>{
   db.Execise.create({
      name: req.body.name,
      muscleGroup: req.body.muscleGroup,
      equipment: req.body.equipment

   })
      .then((results)=>{
         res.json(results);
      })
      .catch((err)=>{
         res.status(500);
         next(err);
      });
});

//Update an exercise
router.put("/:id",(req,res,next)=> {
   db.Execise.update(
      req.body,
      {
         where: {
            id: req.params.id,
         }
      })
      .then((results)=>{
         res.json(results);
      })
      .catch((err)=>{
         res.status(500);
         next(err);
      });
});

//Delete an entry
router.delete("/:id",(req,res,next)=> {
   db.Execise.destroy({
      where: {
         id: req.params.id,
      }
   })
      .then((results)=>{
         res.json(results);
      })
      .catch((err)=>{
         res.status(500);
         next(err);
      });
});

module.exports = router;

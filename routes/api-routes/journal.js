const express = require("express");
const router = express.Router();
const db = require("../../models");

//Get all posts
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

//Get posts by user id
router.get("/:id",(req,res,next)=>{
   db.Journal.findAll({
      where: {
         UserId: req.params.id,

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

//Post a new entry
// router.post("/",(req,res,next)=>{
//    db.Journal.create({

//    });
// });

module.exports = router;

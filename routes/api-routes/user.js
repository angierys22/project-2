const express = require("express");
// const { regexp } = require("sequelize/types/lib/operators");
const router = express.Router();
const db = require("../../models");

router.get("/",(req,res,next) => {
   db.User.findAll({})
      .then((results)=> {
         res.json(results);
      })
      .catch( (err) => {
         res.status(500);
         next(err);
      });
});

router.post("/",(req,res,next) => {
   db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      eMail: req.body.eMail,
   })
      .then((result)=>{
         res.json(result);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });

});

router.delete("/:id",(req,res,next)=>{
   db.User.destroy({
      where: {
         id: req.params.id,
      }
   })
      .then((result)=>{
         res.json(result);
      })
      .catch((err)=> {
         res.status(500);
         next(err);
      });


   
});

module.exports = router;

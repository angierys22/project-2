const express = require("express");
const router = express.Router();
const db = require("../../models");

//Get all posts
router.get("/", (req, res, next) => {
   db.Journal.findAll({})
      .then((results) => {
         res.json(results);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

//Get posts by user id
router.get("/:id", (req, res, next) => {
   db.Journal.findAll({
      where: {
         UserId: req.params.id,
      },
   })
      .then((results) => {
         res.json(results);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

//Post a new entry
router.post("/", (req, res, next) => {
   db.Journal.create({
      title: req.body.title,
      body: req.body.body,
      UserId: req.body.UserId,
   })
      .then((results) => {
         res.json(results);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

//Update an entry
router.put("/:id", (req, res, next) => {
   db.Journal.update(req.body, {
      where: {
         id: req.params.id,
      },
   })
      .then((results) => {
         res.json(results);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

//Delete an entry
router.delete("/:id", (req, res, next) => {
   db.Journal.destroy({
      where: {
         id: req.params.id,
      },
   })
      .then((results) => {
         res.json(results);
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   const version = { version: "0.0.1", requestURL: req.url };
   res.json(version);

});

module.exports = router;

const express = require("express");
const router = express.Router();
const mainRoute = require("./main");

router.use("/", mainRoute);

module.exports = router;

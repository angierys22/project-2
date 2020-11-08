const express = require("express");
const versionRoute = require("./version");
const router = express.Router();

router.use("/version", versionRoute);

module.exports = router;

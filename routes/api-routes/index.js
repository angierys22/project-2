const express = require("express");
const versionRoute = require("./version");
const userRoute = require("./user");
const exerciseRoute = require("./exercise");
const journalRoute = require("./journal");
const router = express.Router();

router.use("/version", versionRoute);
router.use("/user", userRoute);
router.use("/exercise", exerciseRoute);
router.use("/journal", journalRoute);

module.exports = router;

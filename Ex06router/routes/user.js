const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("USER ROUTER!!");
});

router.get("/join", (req, res) => {});

module.exports = router;

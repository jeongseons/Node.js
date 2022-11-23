const express = require("express");
const router = express.Router(); //라우터 사용

router.get("/", (req, res) => {
  res.send("index router!");
});

module.exports = router;

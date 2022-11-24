const express = require("express");
const router = express.Router();

//세션 생성하기
router.get("/setsession", (req, res) => {
  req.session.nickname = "닉네임";
  req.session.today = "today";
  res.send("세션생성");
});

//세션에 저장된 값을 응답하기
router.get("/getsession", (req, res) => {
  res.send("닉네임 : " + req.session.nickname);
});

router.get("/deletesession", (req, res) => {
  req.session.destroy(); //전체 삭제
  //req.session.today = ""; 하나만 삭제
  res.send("세션삭제");
});

module.exports = router;

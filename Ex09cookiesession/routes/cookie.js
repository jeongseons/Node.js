const express = require("express");
const router = express.Router();

//쿠키 설정하기
router.get("/setcookie", (req, res) => {
  let nickname = "pingu";

  res.cookie("nickname", nickname, {
    maxAge: 100000000, //밀리초단위 (만료시간)
  });

  res.cookie("dinner", "치킨", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 2), //2일
  });

  res.send("쿠키생성");
});

//쿠키 확인하기
router.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  console.log(req.cookies.dinner);
  res.send(req.cookies);
});

//쿠키 삭제
router.get("/deletecookie", (req, res) => {
  res.clearCookie("dinner");
  res.send("쿠키삭제");
});

module.exports = router;

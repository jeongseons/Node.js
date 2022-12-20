//라우터
const express = require("express");
const router = express.Router(); //라우터 사용
const User = require("../models/user");

router.post("/insert", async (req, res, next) => {
  //id,pw,age 데이터 받기
  let { id, pw, age } = req.body;
  try {
    //데이터 삽입 시 사용하는 함수
    const user = await User.create({
      //key값(컬럼이름) : value(저장되는 실제값,위에서 데이터 받아온 변수
      id: id,
      pw: pw,
      age: age,
    });
    //값 확인을 위해 user에 담아 확인
    res.json(user);
  } catch (err) {
    next(err); //에러처리하는 middleware
  }
});

//user 모든값 조회(get)
router.get("/selectall", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/select/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "age"],
      where: { id: req.params.id },
    });

    req.session.login = user;
    res.json(user);
  } catch (err) {
    next(err);
  }
});
//수정 : patch (data: body)
router.patch("/update", async (req, res, next) => {
  try {
    const result = await User.update(
      {
        //수정할 값 지정
        pw: req.body.pw,
        age: req.body.age,
      },
      {
        where: { id: req.session.login.id },
      }
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

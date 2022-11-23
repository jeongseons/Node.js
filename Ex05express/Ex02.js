const express = require("express");
const app = express();

//app.set('key', value) : 키에 값을 저장하도록 설정
app.set("port", process.env.PORT || 8888);
//기본 포트가 있다면 그 번호로 포트 지정
//그렇지 않으면 8888

app.get("/home", (req, res) => {
  //라우팅
  //http 모듈 -> html 파일을 응답하기 위해서 필요한 것 -> fs모듈
  //현재파일 경로
  res.sendFile(__dirname + "/Ex02.html"); //파일 응답
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

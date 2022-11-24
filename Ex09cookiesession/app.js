const express = require("express");
const app = express();
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const cookieParser = require("cookie-parser"); //쿠키 확인
const session = require("express-session");
const fileStore = require("session-file-store")(session);

app.set("port", process.env.PORT || 8888);

app.use(cookieParser()); //쿠키값 확인 시 필요
app.use(
  session({
    httpOnly: true, // http 요청으로 온 것만 처리
    resave: false, //세션을 언제나 저장할지 설정
    secret: "secret key", //암호화는데 쓰일 키
    store: new fileStore(), //여러 사용자의 세션을 저장하기 위한 저장소
  })
);

app.use("/c", cookieRouter);
app.use("/s", sessionRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

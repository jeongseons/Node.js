const express = require("express");
const nunjucks = require("nunjucks"); //넌적스 템플릿 엔진 사용
const loginRouter = require("./routes/login");
const app = express();
//post 요청시 body 파싱을 위해 추가
const bodyParser = require("body-parser");
//bodyParser 미들웨어 추가
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html"); //넌적스 = njk / html

app.use("/user", loginRouter);

//npm install nunjucks
//npm install nunjucks chokidar
nunjucks.configure("views", {
  express: app, //app 객체 연결
  watch: true, //html 파일이 연결되면 템플릿 엔진을 다시 렌더링
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

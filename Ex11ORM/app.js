const { request } = require("express");
const express = require("express");
const indexRouter = require("./routes");
const { sequelize } = require("./models"); // ./models/index

const bodyParser = require("body-parser");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

const app = express();

app.set("port", process.env.PORT || 8888);

app.use(bodyParser.urlencoded({ extended: false })); //form 데이터
app.use(bodyParser.json()); //json 데이터
app.use(
  session({
    secret: "secret key", //암호화 시 쓰이는 키
    store: new fileStore(),
  })
);

app.use("/", indexRouter); //bodyparser use 이후로 파싱해줘야함

//force : 서버 실행 시마다 테이블을 재생성 할 것인지 아닌지
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB연결성공!");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 servering---");
});

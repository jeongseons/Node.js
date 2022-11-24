const express = require("express");
const nunjucks = require("nunjucks");
const indexRouter = require("./routes");
const bodyParser = require("body-parser");
const app = express();

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

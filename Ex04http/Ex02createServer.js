const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello world!</h1>");
  res.end("<p>node.js</p>");
});

server.listen(8888); //포트번호 지정

//이벤트 리스너 붙이는 방법
server.on("listening", () => {
  console.log("8888번 포트에서 서버 연결 대기중 ...");
});

server.on("error", (error) => {
  console.log(error);
});

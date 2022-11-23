const fs = require("fs");

//버퍼 -> 스트림 : 버퍼의 크기를 작게 만든 후 여러 번 나눠 보내는 방식
//버퍼 크기 지정(기본값: 64)
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 });
const data = []; //데이터를 담음

//파일 읽기가 시작되면 발생
readStream.on("data", (chunk) => {
  //chunk : 데이터의 부분
  data.push(chunk); //data 배열에 chunk 데이터 넣기
  console.log("data: ", chunk);
});
//파일을 다 읽으면 발생
readStream.on("end", () => {
  //최종적으로 다시 하나의 문자열로 만들기
  console.log(Buffer.concat(data).toString());
});

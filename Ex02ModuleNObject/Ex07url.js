const { URL } = require("url");
// url 생성자 활용

const myURL = new URL(
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%85%90%EB%B0%94%EC%9D%B4%ED%85%90"
);

console.log("searchParams : ", myURL.searchParams); //url의 전체 쿼리 확인
console.log("searchParams.get() : ", myURL.searchParams.get("query")); //특정 키의 값

console.log("searchParams.has() : ", myURL.searchParams.has("page"));
//특정 키를 가지고 있는지 확인(true/false)

console.log("searchParams.keys() : ", myURL.searchParams.keys()); //쿼리의 모든 키값
console.log("searchParams.values() : ", myURL.searchParams.values()); //쿼리의 모든 밸루값

myURL.searchParams.append("key", "value1");
myURL.searchParams.append("key", "value2");
console.log(myURL.searchParams.getAll("key"));
//colors=red,blue,orange
//getAll() : 값이 여러 개일 겨웅 전부 가져오기

myURL.searchParams.set("key", "value3");
console.log(myURL.searchParams.getAll("key"));

myURL.searchParams.delete("key");
console.log(myURL.searchParams.getAll("key"));

console.log("searchParams.toString() : ", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

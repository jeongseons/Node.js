const { odd, even } = require("./var");
const checkOddOrEven = require("./func");

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkStringOddEven;

console.log(checkOddOrEven(3));
console.log(checkStringOddEven("hello"));
